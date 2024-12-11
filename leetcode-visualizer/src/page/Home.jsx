import {Link} from "react-router-dom";
import React from "react";

export const Home = () => (
    <div>
        <h1>Welcome to AlgoViz</h1>
        <p>This is the home page.</p>
        <Link to="/dashboard">Go to Dashboard</Link>
    </div>
);