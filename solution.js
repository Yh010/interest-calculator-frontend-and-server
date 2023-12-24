const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); 

app.get('/interest', (req, res) => {
    const { principal, rate, time } = req.query; // Parse individual values from query
    const parsedPrincipal = parseInt(principal);
    const parsedRate = parseFloat(rate); // Assuming rate might be a decimal value
    const parsedTime = parseInt(time);

    const interest = (parsedPrincipal * parsedRate * parsedTime) / 100;
    const total = parsedPrincipal + interest;

    res.send({
        total: total,
        interest: interest    
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
