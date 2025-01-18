
import '../styles/CodeEditor.css';

import React from 'react';
import Monaco from '@monaco-editor/react';

const CodeEditor = ({ code, setCode }) => {
    return (
        <div className='code-editor'>
            <Monaco
                height="100%"
                defaultLanguage="python"
                value={code}
                onChange={(value) => setCode(value || '')}
                options={{
                    fontSize: 14,
                    automaticLayout: true,
                    wordWrap: "on",
                }}
            />
        </div>
    );
};

export default CodeEditor;
