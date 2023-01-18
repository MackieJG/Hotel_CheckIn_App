import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
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