import React from 'react';
import '../styles/CodeEditor.css';

const CodeEditor = ({ code, setCode }) => (
    <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write Python code here..."
    />
);

export default CodeEditor;
