import { useParams, Link } from "react-router-dom";
import { useUserDetails } from "../hooks/useUserDetails";

export default function UserDetails() {
    const { id } = useParams();
    const { user, loading, error } = useUserDetails(id);

    if (loading) return <p>Loading user...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ maxWidth: "500px", margin: "40px auto" }}>
            <Link to="/users">⬅ Back</Link>

            <h2>
                {user.firstName} {user.lastName}
            </h2>

            <img
                src={user.image}
                alt={user.firstName}
                width="120"
                style={{ borderRadius: "50%" }}
            />

            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>City:</strong> {user.address.city}</p>
        </div>
    );
}
