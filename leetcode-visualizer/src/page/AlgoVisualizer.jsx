import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import '../styles/AlgoVisualizer.css';
import {LoadingComponent} from "../components/Loading";

const AlgoVisualizer = () => {
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [language, setLanguage] = useState('python');

    const executeCode = async () => {
        try {
            setIsRunning(true);
            const response = await fetch('http://localhost:5123/api/python/execute', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code, input }),
            });
            const data = await response.json();
            setOutput(data.output || '');
            setError(data.error || '');
            setIsRunning(false);
        } catch (err) {
            console.error('Error executing code:', err);
        }
    };

    return (
        <div className="algo-visualizer">
            <div className="left-panel">
                <div className="editor-header">
                    <h2>Code Editor</h2>
                    <select
                        className="language-dropdown"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="python">Python</option>
                    </select>
                </div>
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
                    {isRunning ? <LoadingComponent/>
                        : (
                        <div className='wrapper'>
                            <h2>Output</h2>
                            <button className="run-button" onClick={executeCode}>Run Code</button>
                        </div>
                        )}
                    {!isRunning && output && <pre>{output}</pre>}
                    {!isRunning && error && <pre>Error: {error}</pre>}
                </div>
            </div>
        </div>
    );
};

export default AlgoVisualizer;
