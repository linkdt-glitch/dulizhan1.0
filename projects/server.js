const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// SPA fallback: all unmatched routes return index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`MixerAttach store running on http://0.0.0.0:${PORT}`);
});
