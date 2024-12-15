const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const pythonRoutes = require('./src/routes/pythonRoutes');

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
const port = 5123;
app.use(bodyParser.json());

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

app.use('/api/python', pythonRoutes);

app.listen(port, () => console.log(`Backend running on port ${port}`));
