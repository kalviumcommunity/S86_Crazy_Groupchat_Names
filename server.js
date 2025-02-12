<<<<<<< HEAD
// Import the Express module
=======
>>>>>>> e18d6e844e71d598b757453f215dbe3db720ec3b
const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

// /ping route
app.get('/ping', (req, res) => {
    res.send('pong');
});

// Start the server
app.listen(PORT, () => {
<<<<<<< HEAD
    console.log(`Server is running on http://localhost:${PORT}`);
=======
    console.log(`server is running on http://localhost:${PORT}`);
>>>>>>> e18d6e844e71d598b757453f215dbe3db720ec3b
});
