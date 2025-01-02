import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailedUserPage() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    const getUserByID = async () => {
        const response = await fetch(`https://users-api-roan.vercel.app/api/users/${id}`);
        const data = await response.json();
        console.log(data);
        setUser(data[0]);
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
                <div style={{ fontWeight: "bold" }}>{user.first_name} {user.last_name}</div>
                <div>{user.email}</div>
                <div>Birthday: {user.user_profiles.date_of_birth}</div>
                <div>Bio: {user.user_profiles.bio}</div>
            </div>
        </div>
    );
};