import React, { useState, useEffect } from 'react';
import '../styles/ThemeToggler.css'; // Import the CSS for ThemeToggle

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // Default to 'light' theme

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'; // Toggle between 'light' and 'dark'
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save theme preference in localStorage
        document.documentElement.setAttribute('data-theme', newTheme); // Update theme globally
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme); // Apply saved or default theme on mount
    }, [theme]);

    return (
        <button onClick={toggleTheme} className='toggle-button'>
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;
