// const { Db } = require("mongodb");

use booking_hub;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Benoit Blanc",
        email:"benoit@blanc.com",
        checkedIn: true
    },
    {
        name: "Jack Torrance",
        email:"jack@outlookhotel.com",
        checkedIn: true
    },
    {
        name: "Gustave H",
        email:"conceirge@grandbudapest.com",
        checkedIn: false
    }


])