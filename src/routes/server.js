const express = require('express');
const cors = require('cors');
const app = express();

// To test json data
app.use(express.json());

app.use(cors());

app.use('/login', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(res.json);
    // console.log(req.headers);
    // console.log(res.json);

    res.send({
        token: 'test123'
    });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));