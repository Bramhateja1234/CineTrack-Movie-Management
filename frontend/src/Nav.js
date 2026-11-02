import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useNotifications } from "./NotificationContext";

const Icon = ({ children }) => <span className="nav-icon" aria-hidden="true">{children}</span>;

export default function Nav() {
    const [collapsed, setCollapsed] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const { notifications, unreadCount, markAllRead, clearAll } = useNotifications();
    const navigate = useNavigate();
    const goTo = (path) => { navigate(path); setProfileOpen(false); };

    return <>
        <aside className={`sidebar ${collapsed ? "sidebar-collapsed" : ""}`}>
            <div className="brand"><div className="brand-mark">▣</div><div className="brand-copy"><strong>CineTrack</strong><span>Movie Management System</span></div></div>
            <nav className="sidebar-nav">
                <p className="nav-label">Workspace</p>
                <NavLink to="/dashboard" className={({ isActive }) => `side-link ${isActive ? "active" : ""}`}><Icon>⌂</Icon><span>Dashboard</span></NavLink>
                <p className="nav-label nav-label-spaced">Movies</p>
                <NavLink to="/movies" className={({ isActive }) => `side-link ${isActive ? "active" : ""}`}><Icon>▤</Icon><span>All Movies</span></NavLink>
                <NavLink to="/add" className={({ isActive }) => `side-link ${isActive ? "active" : ""}`}><Icon>＋</Icon><span>Add Movie</span></NavLink>
                <NavLink to="/find" className={({ isActive }) => `side-link ${isActive ? "active" : ""}`}><Icon>⌕</Icon><span>Find by ID</span></NavLink>
                <button className="side-link side-button" onClick={() => goTo("/dashboard")}><Icon>ⓘ</Icon><span>About</span></button>
            </nav>
            <div className="sidebar-footer"><span className="status-dot" /> API connected</div>
        </aside>
        <header className={`topbar ${collapsed ? "topbar-expanded" : ""}`}>
            <button className="icon-button menu-button" onClick={() => setCollapsed(!collapsed)} aria-label="Toggle sidebar">☰</button>
            <div className="topbar-actions">
                <div className="notification-wrap"><button className="icon-button notification-button" onClick={() => setNotificationsOpen(!notificationsOpen)} aria-label="Notifications">♢{unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}</button>
                    {notificationsOpen && <div className="popover notification-popover"><div className="popover-header"><div><strong>Notifications</strong><span>{unreadCount} unread</span></div><button onClick={clearAll}>Clear all</button></div>{notifications.length === 0 ? <p className="empty-popover">You're all caught up.</p> : notifications.map((item) => <button className={`notification-item ${item.read ? "read" : ""}`} key={item.id} onClick={markAllRead}><span className={`notification-dot ${item.type}`} /><span><strong>{item.message}</strong><small>{item.time}</small></span></button>)}</div>}
                </div>
                <div className="profile-wrap"><button className="profile-trigger" onClick={() => setProfileOpen(!profileOpen)}><span className="avatar">TR</span><span className="profile-name">Teja Reddy<small>Administrator</small></span><span className="chevron">⌄</span></button>
                    {profileOpen && <div className="popover profile-popover"><div className="profile-summary"><span className="avatar avatar-large">TR</span><div><strong>Teja Reddy</strong><span>Administrator</span></div></div><button onClick={() => goTo("/dashboard")}>♙ My Profile</button><button onClick={() => goTo("/dashboard")}>⚙ Account Settings</button><button onClick={() => goTo("/dashboard")}>ⓘ About Application</button><button className="logout-button" onClick={() => setProfileOpen(false)}>↪ Logout</button></div>}
                </div>
            </div>
        </header>
    </>;
}
