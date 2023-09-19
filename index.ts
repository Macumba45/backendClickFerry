const express = require('express');
const http = require('http');
const WebSocketServer = require('ws');
const cors = require('cors');


const app = express();
const server = http.createServer(app);
const PORT = 3000;
const API_URL = "https://tadpole.clickferry.app/departures?route=ALGECEUT&time=2023-09-20"

app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/departures', async (req, res) => {
    try {
        const route = req.query.route;
        const time = req.query.time;
        const apiUrl = `https://tadpole.clickferry.app/departures?route=${route}&time=${time}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json(); // Parsea la respuesta como JSON

        res.header('Access-Control-Allow-Origin', '*'); // Establece el encabezado CORS
        res.json(responseData); // Envia los datos JSON al cliente
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/departures/accomodations', async (req, res) => {
    try {
        const route = req.query.route;
        const time = req.query.time;
        const adults = req.query.adults;
        const children = req.query.children;
        const babies = req.query.babies;
        const apiUrl = `https://tadpole.clickferry.app/accommodations?route=${route}&time=${time}&adults=${adults}&children=${children}&babies=${babies}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json(); // Parsea la respuesta como JSON
        res.header('Access-Control-Allow-Origin', '*'); // Establece el encabezado CORS
        res.json(responseData); // Envia los datos JSON al cliente
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
