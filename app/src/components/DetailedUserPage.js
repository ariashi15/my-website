import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailedUserPage() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    const getUserByID = async () => {
        const response = await fetch(`https://disc-assignment-5-users-api.onrender.com/api/users/${id}`);
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        getUserByID();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="page-title">getUserByID detailed user page</div>
            <div
                style={{ backgroundColor: "#F1F1FF", padding: "20px", margin: "30px" }}
            >
                <div style={{ fontWeight: "bold" }}>{user.firstname} {user.lastname}</div>
                <div>{user.email}</div>
                <div>Major: {user.major}, Class of {user.graduationyear}</div>
            </div>
        </div>
    );
};