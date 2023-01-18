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

    const addBooking = (booking) => {
        const temp = bookings.map(b => b);
        temp.push(booking);
        setBookings(temp);
    }

    const removeBooking = (id) => {
        const temp = bookings.map(b => b);
        const indexToDelete = temp.map(b => b._id).indexOf(id);
        temp.splice(indexToDelete, 1);
        setBookings(temp);
    }


    return (
        <>
            <BookingForm addBooking={addBooking}/>
            <BookingList bookings={bookings} removeBooking={removeBooking}/>
        </>
    )


}

export default MainContainer;