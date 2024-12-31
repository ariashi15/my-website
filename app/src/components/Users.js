import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Users() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const getAllUsers = async () => {
        const response = await fetch("https://disc-assignment-5-users-api.onrender.com/api/users")
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    const createUser = async () => {
        const formData = new FormData();
        formData.append("firstName", "New");
        formData.append("lastName", "User");
        formData.append("email", "something@gmail.com");
        formData.append("bio", "hi");
        formData.append("major", "Computer Science");
        formData.append("graduationYear", 2027);

        const selection = await window.showOpenFilePicker();
        if (selection.length > 0) {
            const file = await selection[0].getFile();
            formData.append("image", file);
        }
    
        const response = await fetch("https://disc-assignment-5-users-api.onrender.com/api/users", { 
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            console.log("User created successfully");
        } else {
            console.error("Failed to create user", response.status, await response.text());
        }

        getAllUsers();
    }

    return (
        <div>
            <div className="page-title">dummy page for hw5</div>
            <div className="projects">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="user-card"
                        style={{ backgroundColor: "#F1F1FF", padding: "20px" }}
                        onClick={() => navigate(`/users/${user.id}`)}
                        >
                        <div style={{ fontWeight: "bold" }}>{user.firstname} {user.lastname}</div>
                        <div>{user.email}</div>
                        <div>Major: {user.major}, Class of {user.graduationyear}</div>
                        <div>(click me to go to detailed user page)</div>
                    </div>
                ))}
                <div 
                    style={{backgroundColor: "#1117B1", color: "white", padding: "5px", width: "200px"}}
                    onClick={() => createUser()}
                >click me to create new user</div>
            </div>
        </div>
    );
};