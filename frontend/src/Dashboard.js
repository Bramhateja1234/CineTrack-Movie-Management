import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMovies } from "./Movie Service";
import { useNotifications } from "./NotificationContext";

function StatCard({ label, value, detail, icon, tone }) {
    return <div className={`stat-card ${tone}`}><div className="stat-top"><span>{label}</span><span className="stat-icon">{icon}</span></div><strong>{value}</strong><small>{detail}</small></div>;
}

export default function Dashboard() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const { notify } = useNotifications();
    const navigate = useNavigate();
    useEffect(() => { getMovies().then((result) => setMovies(result.data)).catch(() => notify("API request failed. Dashboard data is unavailable.", "error")).finally(() => setLoading(false)); }, [notify]);
    const ratings = movies.map((movie) => Number(movie.rating)).filter((rating) => !Number.isNaN(rating));
    const years = movies.map((movie) => Number(movie.releaseYear)).filter((year) => !Number.isNaN(year));
    const average = ratings.length ? (ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length).toFixed(1) : "—";
    const oldest = years.length ? Math.min(...years) : "—";
    const latest = years.length ? Math.max(...years) : "—";
    const recent = [...movies].sort((a, b) => Number(b.releaseYear) - Number(a.releaseYear)).slice(0, 5);
    return <section className="page-section dashboard-page"><div className="welcome-row"><div><span className="eyebrow">OVERVIEW</span><h1>Welcome Back, Teja</h1><p>Here's what's happening with your movie collection today.</p></div><button className="primary-button" onClick={() => navigate("/add")}>＋ Add Movie</button></div><div className="dashboard-title"><div><h2>Movie Management Dashboard</h2><p>Manage your movie collection with Spring Boot + React</p></div><span className="live-indicator"><i /> Live data</span></div><div className="stats-grid"><StatCard label="Total Movies" value={loading ? "…" : movies.length} detail="Titles in your collection" icon="▤" tone="green" /><StatCard label="Average Rating" value={loading ? "…" : average} detail="Across all movies" icon="★" tone="amber" /><StatCard label="Oldest Movie" value={loading ? "…" : oldest} detail="Earliest release year" icon="◷" tone="blue" /><StatCard label="Latest Movie" value={loading ? "…" : latest} detail="Most recent release year" icon="↗" tone="purple" /></div><div className="dashboard-lower"><div className="table-card recent-card"><div className="card-heading"><div><h3>Recently added</h3><p>Your latest movie records</p></div><button className="text-button" onClick={() => navigate("/movies")}>View all →</button></div><div className="recent-list">{recent.length ? recent.map((movie) => <div className="recent-row" key={movie.mid}><div className="poster-placeholder">{String(movie.title || "M").charAt(0).toUpperCase()}</div><div><strong>{movie.title}</strong><span>{movie.director || "Unknown director"} · {movie.releaseYear}</span></div><span className="rating">★ {movie.rating}</span></div>) : <div className="empty-state">No movie records returned by the API.</div>}</div></div><div className="tip-card"><div className="tip-icon">✦</div><h3>Build your collection</h3><p>Keep your movie library organized by adding titles and maintaining accurate details.</p><button className="secondary-button" onClick={() => navigate("/add")}>Add a movie</button></div></div></section>;
}
