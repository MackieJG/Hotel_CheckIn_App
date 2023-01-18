import BookingElement from './BookingElement'
import styled from 'styled-components';

const BookingTitle = styled.h3`
    background-color:#F4F06B;
    width: 50%;
`


const BookingList = ({bookings, removeBooking}) => {
    console.log(bookings)
    const BookingData = bookings.map( (booking) =>{
        return <BookingElement booking={booking} key={booking._id} removeBooking={removeBooking}/>
    }) 
     
    return(
        <>
            <BookingTitle><strong>Bookings</strong></BookingTitle>
            {BookingData}
        </>
    )
}

export default BookingList;