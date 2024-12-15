import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import '../styles/AlgoVisualizer.css';

const AlgoVisualizer = () => {
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    const executeCode = async () => {
        try {
            const response = await fetch('https://algoviz-backend-lkg5.onrender.com/api/python/execute', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code, input }),
            });
            const data = await response.json();
            setOutput(data.output || '');
            setError(data.error || '');
        } catch (err) {
            console.error('Error executing code:', err);
        }
    };

    return (
        <div className="algo-visualizer">
            <div className="left-panel">
                <h2>Code Editor</h2>
                <div>
                    <CodeEditor code={code} setCode={setCode}/>
                </div>
            </div>
            <div className='right-panel'>
                <div className="input-section">
                    <h2>Input</h2>
                    <textarea
                        placeholder="Enter input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div className="output-section">
                    <button className="run-button" onClick={executeCode}>Run Code</button>
                    {output && <pre>Output: {output}</pre>}
                    {error && <pre>Error: {error}</pre>}
                </div>
            </div>
        </div>
    );
};

export default AlgoVisualizer;
