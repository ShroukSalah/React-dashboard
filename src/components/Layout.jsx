export default function Layout({ children }) {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar */}
            <aside
                style={{
                    width: "220px",
                    background: "#111",
                    color: "#fff",
                    padding: "20px"
                }}
            >
                <h2>Admin</h2>
                <p style={{ opacity: 0.7 }}>Dashboard</p>
            </aside>

            {/* Main */}
            <main
                style={{
                    flex: 1,
                    background: "#f5f6f8",
                    padding: "30px"
                }}
            >
                {children}
            </main>
        </div>
    );
}
