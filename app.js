const express = require('express');
const path = require('path');
const app = express();

// Serve static files from React app
app.use(express.static(path.join(__dirname, './client/public')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/public/index.html'));
});

// Start the server
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
