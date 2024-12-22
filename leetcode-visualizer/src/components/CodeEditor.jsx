import '../styles/CodeEditor.css';
import React, { useRef, useEffect } from 'react';
import Monaco from '@monaco-editor/react';
import {LoadingComponent} from "./Loading";

const CodeEditor = ({ code, setCode }) => {
    const editorRef = useRef(null);
    const containerRef = useRef(null);

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
    };

    useEffect(() => {
        // Handle manual layout updates
        const handleResize = () => {
            if (editorRef.current) {
                editorRef.current.layout();
            }
        };

        // Add resize listener
        window.addEventListener('resize', handleResize);

        // Create ResizeObserver for container size changes
        const resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(() => {
                if (editorRef.current) {
                    editorRef.current.layout();
                }
            });
        });

        // Observe container
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            resizeObserver.disconnect();
            if (editorRef.current) {
                editorRef.current.dispose();
            }
        };
    }, []);

    return (
        <div className='code-editor' ref={containerRef}>
            <Monaco
                height="100%"
                width="100%"
                defaultLanguage="python"
                value={code}
                onChange={(value) => setCode(value || '')}
                onMount={handleEditorDidMount}
                options={{
                    fontSize: 14,
                    automaticLayout: false, // Disabled automatic layout
                    wordWrap: "on",
                    minimap: {
                        enabled: false
                    },
                    scrollBeyondLastLine: false,
                    lineNumbers: 'on',
                    renderLineHighlight: 'all',
                    renderWhitespace: 'none',
                    smoothScrolling: true
                }}
                theme={'vs-dark'}
                loading={<LoadingComponent />}
            />
        </div>
    );
};

export default CodeEditor;
