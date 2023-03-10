const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json())

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_routers.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('booking_hub');
        const bookingsCollection = db.collection('bookings');
        const bookingsRouter = createRouter(bookingsCollection);
        app.use('/api/bookings', bookingsRouter);
    })
    .catch(console.error);

    app.listen(9000, function () {
        console.log(`Listening on Port ${ this.address().port}`);
    });
