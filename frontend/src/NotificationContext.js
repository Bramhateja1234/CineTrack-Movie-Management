import { createContext, useCallback, useContext, useMemo, useState } from "react";

const NotificationContext = createContext(null);

export function NotificationProvider({ children }) {
    const [notifications, setNotifications] = useState([]);
    const notify = useCallback((message, type = "success") => setNotifications((current) => [{ id: `${Date.now()}-${Math.random()}`, message, type, time: "Just now", read: false }, ...current].slice(0, 8)), []);
    const markAllRead = useCallback(() => setNotifications((current) => current.map((item) => ({ ...item, read: true }))), []);
    const clearAll = useCallback(() => setNotifications([]), []);
    const value = useMemo(() => ({ notifications, unreadCount: notifications.filter((item) => !item.read).length, notify, markAllRead, clearAll }), [notifications, notify, markAllRead, clearAll]);
    return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
}

export function useNotifications() {
    return useContext(NotificationContext);
}
