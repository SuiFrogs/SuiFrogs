// server.js
const express = require('express');
const app = express();
const port = 3000;

// Serve static files (like HTML, CSS, JS)
app.use(express.static('public'));

// Basic route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Web interface is running on http://localhost:3000`);
});
