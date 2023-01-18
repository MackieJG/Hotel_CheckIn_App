import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import { useState, useEffect } from 'react';
import { getBooking } from '../components/BookingService';


const MainContainer = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(()=>{
        getBooking()
        .then((allBookings) => {
            setBookings(allBookings)
        })
    },[]);


    return (
        <>
            <BookingForm />
            <BookingList/>
        </>
    )


}

export default MainContainer;