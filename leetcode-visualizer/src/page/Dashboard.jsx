import { useEffect, useState } from "react";
import '../styles/Dashboard.css';
import config from "../config"; // You can add custom styles here

export const Dashboard = () => {
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Fetching problems...");
        fetch(`${config.CLOUD_API_URL}/problems`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setProblems(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">AlgoViz Dashboard</h1>

            {/* Show loading spinner or message */}
            {loading && <p>Loading problems...</p>}
            {error && <p className="error-message">Error: {error}</p>}

            {/* Display problems if available */}
            {!loading && !error && problems.length === 0 && <p>No problems available.</p>}

            {/* Render problem cards */}
            <div className="problem-list">
                {problems.map((problem) => (
                    <div key={problem.id} className="problem-card">
                        <h2 className="problem-title">{problem.title}</h2>
                        <p className="problem-type">Type: {problem.type}</p>
                        <p className="problem-difficulty">Difficulty: {problem.difficulty}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
