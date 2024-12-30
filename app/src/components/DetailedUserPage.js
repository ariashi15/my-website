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

    return (
        <div>selected</div>
    );
};