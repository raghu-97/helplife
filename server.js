// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const { Client } = require('pg');
// const path = require('path');
// const https = require('https');
// const fs = require('fs');

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// const client = new Client({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
// });

// client.connect();

// app.post('/api/login', (req, res) => {
//     const { username, password } = req.body;

//     const query = 'SELECT * FROM users WHERE username = $1 AND password = $2';
//     client.query(query, [username, password], (err, result) => {
//         if (err) {
//             res.status(500).json({ success: false, message: 'Database error' });
//         } else if (result.rows.length > 0) {
//             res.status(200).json({ success: true });
//         } else {
//             res.status(401).json({ success: false, message: 'Invalid credentials' });
//         }
//     });
// });

// const httpsOptions = {
//     key: fs.readFileSync('path/to/your/private.key'),
//     cert: fs.readFileSync('path/to/your/certificate.crt'),
// };

// https.createServer(httpsOptions, app).listen(port, () => {
//     console.log(`Server running on https://localhost:${port}`);
// });
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
