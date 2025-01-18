import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AlgoVisualizer from "./page/AlgoVisualizer";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>AlgoViz</h1>
                </header>
                <div className='main'>
                    <Routes>
                        {/* Root path directly renders the AlgoVisualizer */}
                        <Route path="/" element={<AlgoVisualizer/>}/>
                    </Routes>
                </div>
                <footer className="app-footer">
                    <p>Created by <strong>Srikar Reddy Pochana</strong></p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
