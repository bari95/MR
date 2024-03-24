

const express = require('express');
const app = express();
const port = 3000; // Choose any available port

// Serve static files from the 'dist' directory
app.use(express.static('dist'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});