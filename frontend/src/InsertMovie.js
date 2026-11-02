import { useState } from "react";
import { insertMovie } from "./Movie Service";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "./NotificationContext";

export default function InsertMovie() {
    const navigate = useNavigate();
    const { notify } = useNotifications();
    const [Movie, setMovie] = useState({ title: "", language: "", releaseYear: "", rating: "", director: "" });
    const handleChange = (e) => setMovie({ ...Movie, [e.target.name]: e.target.value });
    const save = async () => { try { await insertMovie(Movie); notify("Movie added successfully.", "success"); navigate("/get"); } catch (error) { notify("API request failed. The movie could not be added.", "error"); } };
    return <section className="page-section form-page"><div className="page-heading"><div><span className="eyebrow">COLLECTION</span><h1>Add Movie</h1><p>Add a new title to your CineVault collection.</p></div></div><div className="form-card"><div className="form-intro"><div className="form-icon">＋</div><div><h2>Movie details</h2><p>Enter the information below to create a movie record.</p></div></div><div className="form-grid"><label>Movie Title<input type="text" name="title" placeholder="e.g. The Grand Budapest Hotel" onChange={handleChange} /></label><label>Language<input type="text" name="language" placeholder="e.g. English" onChange={handleChange} /></label><label>Release Year<input type="number" name="releaseYear" placeholder="e.g. 2024" onChange={handleChange} /></label><label>Rating<input type="number" name="rating" placeholder="e.g. 8.5" onChange={handleChange} /></label><label className="full-width">Director<input type="text" name="director" placeholder="e.g. Christopher Nolan" onChange={handleChange} /></label></div><div className="form-actions"><button className="secondary-button" onClick={() => navigate("/get")}>Cancel</button><button className="primary-button" onClick={save}>Save Movie</button></div></div></section>;
}
