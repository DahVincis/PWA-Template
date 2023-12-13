const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/info.html'));
});

app.get('/schedule', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/schedule.html'));
});

// Additional routes for your server-side logic can go here
// You can require and use modules from your '/source/server-side' directory

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
