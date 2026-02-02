export default function Header({ title }) {
    return (
        <div
            style={{
                background: "#fff",
                padding: "16px 20px",
                borderRadius: "8px",
                marginBottom: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}
        >
            <h2 style={{ margin: 0 }}>{title}</h2>
        </div>
    );
}
