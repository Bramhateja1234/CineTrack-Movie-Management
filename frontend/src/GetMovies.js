import { useEffect, useMemo, useState } from "react";
import { deleteMovieById, getMovies } from "./Movie Service";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "./NotificationContext";

export default function GetMovies() {
    const [Movie, setMovie] = useState([]);
    const [search, setSearch] = useState("");
    const Navigate = useNavigate();
    const { notify } = useNotifications();
    useEffect(() => { getMovies().then((result) => setMovie(result.data)).catch(() => notify("API request failed. Movies could not be loaded.", "error")); }, [notify]);
    const remove = async (mid) => {
        if (!window.confirm("Are you sure you want to delete this movie?")) return;
        try { await deleteMovieById(mid); const result = await getMovies(); setMovie(result.data); notify("Movie deleted successfully.", "success"); }
        catch (error) { notify("API request failed. The movie could not be deleted.", "error"); }
    };
    const filteredMovies = useMemo(() => Movie.filter((movie) => [movie.title, movie.language, movie.director, movie.releaseYear].some((value) => String(value || "").toLowerCase().includes(search.toLowerCase()))), [Movie, search]);
    return <section className="page-section"><div className="page-heading"><div><span className="eyebrow">COLLECTION</span><h1>All Movies</h1><p>A complete list of movies in your collection.</p></div><button className="primary-button" onClick={() => Navigate("/add")}>＋ Add Movie</button></div><div className="toolbar"><div className="search-box"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search movies, directors..." /></div><span className="result-count">{filteredMovies.length} movies</span></div><div className="table-card"><table className="movie-table"><thead><tr><th>ID</th><th>Poster</th><th>Title</th><th>Language</th><th>Release Year</th><th>Rating</th><th>Director</th><th>Actions</th></tr></thead><tbody>{filteredMovies.map((s) => <tr key={s.mid}><td>{s.mid}</td><td><div className="poster-placeholder">{String(s.title || "M").charAt(0).toUpperCase()}</div></td><td><strong>{s.title}</strong></td><td><span className="language-pill">{s.language}</span></td><td>{s.releaseYear}</td><td><span className="rating">★ {s.rating}</span></td><td>{s.director}</td><td><div className="action-buttons"><button className="table-action edit-action" type="button" onClick={() => Navigate(`/edit/${s.mid}`)}>Edit</button><button className="table-action delete-action" onClick={() => remove(s.mid)}>Delete</button></div></td></tr>)}</tbody></table>{filteredMovies.length === 0 && <div className="empty-state">No movies match your search.</div>}</div></section>;
}
