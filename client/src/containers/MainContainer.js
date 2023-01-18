import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import { useState, useEffect } from 'react';
import { getBooking } from '../components/BookingService';
import styled from 'styled-components';

const Body = styled.div`
  font-size: 1.5em;
  color: black;
  background-image: url('https://images.pexels.com/photos/14025040/pexels-photo-14025040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  margin: 0;
  padding: 1em;
  font-family:'Raleway', sans-serif;
`


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

    const updateCheckIn = (id, updatedBooking) => {
        const copyBookings = [...bookings];
        const bookingIndex = copyBookings.map(b => b._id).indexOf(id);
        copyBookings[bookingIndex] = {...updatedBooking, id};
        // const temp = bookings.map(b => {
        //     if(b._id === id) {
        //         b.status = !b.status
        //     }
        //     return b
        // });
        setBookings(copyBookings);
       
        
    }
    


    return (
        <Body>
            <BookingForm addBooking={addBooking}/>
            <BookingList bookings={bookings} removeBooking={removeBooking} updateCheckIn={updateCheckIn}/>
        </Body>
    )


}

export default MainContainer;