const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
const port = 5123;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, LeetCode Backend is running!' });
});

const problems = [
  { id: 1, title: "Two Sum", type: "Arrays", difficulty: "Easy" },
  { id: 2, title: "Binary Search", type: "Binary Search", difficulty: "Medium" }
];

app.get('/problems', (req, res) => {
  res.json(problems);
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
