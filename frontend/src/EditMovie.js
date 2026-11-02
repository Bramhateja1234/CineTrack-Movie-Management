import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieById, updateMovieById } from "./Movie Service";
import { useNotifications } from "./NotificationContext";

export default function EditMovies() {
    const { id } = useParams();
    const [Movie, setMovie] = useState({});
    const navigate = useNavigate();
    const { notify } = useNotifications();
    useEffect(() => { getMovieById(id).then((result) => setMovie(result.data)).catch(() => notify("API request failed. Movie details could not be loaded.", "error")); }, [id, notify]);
    const handleChange = (e) => setMovie({ ...Movie, [e.target.name]: e.target.value });
    const save = async () => { try { await updateMovieById(id, Movie); notify("Movie updated successfully.", "success"); navigate("/get"); } catch (error) { notify("API request failed. The movie could not be updated.", "error"); } };
    return <section className="page-section form-page"><div className="page-heading"><div><span className="eyebrow">COLLECTION</span><h1>Edit Movie</h1><p>Update the details for movie #{id}.</p></div></div><div className="form-card"><div className="form-intro"><div className="form-icon">✎</div><div><h2>Movie details</h2><p>Make changes and save when you are ready.</p></div></div><div className="form-grid"><label>Movie ID<input type="text" name="mid" value={id} readOnly /></label><label>Movie Title<input type="text" name="title" placeholder="Enter Title" value={Movie.title || ""} onChange={handleChange} /></label><label>Language<input type="text" name="language" placeholder="Enter Language" value={Movie.language || ""} onChange={handleChange} /></label><label>Release Year<input type="text" name="releaseYear" placeholder="Enter Release Year" value={Movie.releaseYear || ""} onChange={handleChange} /></label><label>Rating<input type="text" name="rating" placeholder="Enter Rating" value={Movie.rating || ""} onChange={handleChange} /></label><label>Director<input type="text" name="director" placeholder="Enter Director" value={Movie.director || ""} onChange={handleChange} /></label></div><div className="form-actions"><button className="secondary-button" onClick={() => navigate("/get")}>Cancel</button><button className="primary-button" type="submit" onClick={save}>Update Movie</button></div></div></section>;
}
