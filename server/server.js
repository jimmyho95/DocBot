const express = require('express');
require('dotenv').config();
// const cors = require('cors');
const PORT = process.env.PORT || 3000;
// const path = require('path')

const app = express();
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send(`running on port, ${PORT}`)
})

app.use((req, res) => res.status(404).send('Not Found'));

app.use((err, req, res, next) => {
    const defaultError = {
        log: 'Express server caught unknown middleware error', 
        status: 500,
        message: {error: 'An error occured'},
    };
    const errorObj = Object.assign(defaultError, err)
    res.status(errorObj.status).send(errorObj.message);
}
);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;