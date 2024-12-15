const { executeCodeInSandbox } = require('../utils/sandbox');

exports.executePythonCode = async (req, res) => {
    const { code, input } = req.body;

    try {
        const result = await executeCodeInSandbox(code, input);
        res.json({ output: result });
    } catch (err) {
        console.error('Error executing Python code:', err.message);
        res.status(500).json({ error: err.message });
    }
};
