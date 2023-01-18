<<<<<<< HEAD
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
=======

import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
>>>>>>> d48f9d214860808f3ec851f2fbf3d76e6df46264
import { useState } from 'react';


const MainContainer = () => {
    const [bookings, setBookings] = useState([])


    return (
        <>
            <BookingForm />
            <BookingList/>
        </>
    )


}

export default MainContainer;