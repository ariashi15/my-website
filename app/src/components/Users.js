import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Users() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const getAllUsers = async () => {
        const response = await fetch("http://localhost:3005/api/users")
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    const createUser = async () => {
        const userData = {
            first_name: "First",
            last_name: "Last",
            email: "something@example.com"
        }
    
        const response = await fetch("http://localhost:3005/api/users", { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
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
                        <div style={{ fontWeight: "bold" }}>{user.first_name} {user.last_name}</div>
                        <div>{user.email}</div>
                        {/* <div>Major: {user.major}, Class of {user.graduationyear}</div> */}
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