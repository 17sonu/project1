const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Serve the static HTML file for the frontend
app.use(express.static('public'));

// Route to call the Python API
app.get('/start_capture', async (req, res) => {
    try {
        const response = await axios.get('https://c476-2402-3a80-196c-6437-5b2-b041-33a0-fd73.ngrok-free.app/start_capture');
        res.send(response.data);
    } catch (error) {
        res.status(500).send("Error communicating with Python API");
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Node.js server running on http://localhost:${PORT}`);
});
