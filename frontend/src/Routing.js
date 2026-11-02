
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import InsertMovie from "./InsertMovie";
import GetMovies from "./GetMovies";
import EditMovie from "./EditMovie";
import Dashboard from "./Dashboard";
import FindMovie from "./FindMovie";
import { NotificationProvider } from "./NotificationContext";

export default function Routing() {
    return (
        <NotificationProvider>
            <div className="app-shell">
                <Nav />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/get" element={<GetMovies />} />
                        <Route path="/movies" element={<GetMovies />} />
                        <Route path="/add" element={<InsertMovie />} />
                        <Route path="/edit/:id" element={<EditMovie />} />
                        <Route path="/find" element={<FindMovie />} />
                    </Routes>
                </main>
            </div>
        </NotificationProvider>
    );
}