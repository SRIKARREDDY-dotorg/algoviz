const { exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

exports.executeCodeInSandbox = async (code, input) => {
    const tempFilePath = path.join(__dirname, 'temp_code.py');

    // Write the Python code to a temporary file
    await fs.writeFile(tempFilePath, code);

    return new Promise((resolve, reject) => {
        const command = `echo "${input}" | python3 ${tempFilePath}`;

        exec(command, async (error, stdout, stderr) => {
            try {
                // Cleanup the temporary file
                await fs.unlink(tempFilePath);

                if (error) {
                    // Include both stderr and error.message for detailed debugging
                    const errorDetails = stderr || error.message || 'Unknown error occurred';
                    return reject(new Error(`Execution failed: ${errorDetails}`));
                }

                // Resolve with the trimmed stdout
                resolve(stdout.trim());
            } catch (cleanupError) {
                // Handle cleanup failures
                console.error(`Failed to clean up temp file: ${cleanupError.message}`);
                reject(new Error(`Execution succeeded, but cleanup failed: ${cleanupError.message}`));
            }
        });
    });
};
