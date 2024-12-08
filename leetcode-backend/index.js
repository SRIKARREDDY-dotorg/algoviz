const express = require('express');
const app = express();

const port = 5123;

app.get('/', (req, res) => {
  res.send('Hello, LeetCode Backend is running!');
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
