import { useState } from "react";
import { getMovieById } from "./Movie Service";
import { useNotifications } from "./NotificationContext";

export default function FindMovie() {
    const [id, setId] = useState("");
    const [movie, setMovie] = useState(null);
    const { notify } = useNotifications();
    const searchMovie = async () => {
        if (!id.trim()) return;
        try { const result = await getMovieById(id); setMovie(result.data); }
        catch (error) { setMovie(null); notify("API request failed. No movie was found for that ID.", "error"); }
    };
    return <section className="page-section form-page"><div className="page-heading"><div><span className="eyebrow">COLLECTION</span><h1>Find Movie by ID</h1><p>Look up a specific movie from your collection.</p></div></div><div className="find-card"><div className="search-box large-search"><span>⌕</span><input type="number" value={id} onChange={(event) => setId(event.target.value)} placeholder="Enter movie ID" onKeyDown={(event) => event.key === "Enter" && searchMovie()} /><button className="primary-button" onClick={searchMovie}>Search</button></div>{movie && <div className="movie-detail"><div className="detail-poster">{String(movie.title || "M").charAt(0).toUpperCase()}</div><div><span className="eyebrow">MOVIE #{movie.mid}</span><h2>{movie.title}</h2><p>{movie.director || "Unknown director"}</p><div className="detail-grid"><span><small>Language</small><strong>{movie.language}</strong></span><span><small>Release year</small><strong>{movie.releaseYear}</strong></span><span><small>Rating</small><strong className="rating">★ {movie.rating}</strong></span></div></div></div>}</div></section>;
}
