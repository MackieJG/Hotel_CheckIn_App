// const { Db } = require("mongodb");

use booking_hub;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Benoit Blanc",
        email:"benoit@blanc.com",
        status: true
    },
    {
        name: "Jack Torrance",
        email:"jack@outlookhotel.com",
        status: true
    },
    {
        name: "Gustave H",
        email:"conceirge@grandbudapest.com",
        status: false
    }


])