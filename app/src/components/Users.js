import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DetailedUserPage from "./DetailedUserPage";

export default function HW5() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    //const[selectedUserID, setSelectedUserID] = useState(null);

    const getAllUsers = async () => {
        const response = await fetch("https://disc-assignment-5-users-api.onrender.com/api/users")
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div>
            <div className="page-title">dummy page for hw5</div>
            <div className="projects">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="user-card" style={{ backgroundColor: "#F1F1FF", padding: "20px" }}
                        onClick={() => navigate(`/users/${user.id}`)}
                        >
                        <div style={{ fontWeight: "bold" }}>{user.firstname} {user.lastname}</div>
                        <div>{user.email}</div>
                        <div>Major: {user.major}, Class of {user.graduationyear}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};