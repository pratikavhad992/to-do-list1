const express = require('express');
const path = require('path');

const app = express();

// Serve static files (CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index.html page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
