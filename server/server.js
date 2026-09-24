const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/issues', async (req, res) => {
  const { title, description } = req.body;

  try {
    const response = await fetch(
      'https://api.github.com/repos/WanKim00/widget-spike/issues',
      {
        method: 'POST',
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          body: description,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.json({
      message: 'Issue created successfully',
      issueNumber: data.number,
      issueUrl: data.html_url,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to create issue',
    });
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
