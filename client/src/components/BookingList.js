import BookingElement from './BookingElement'
import styled from 'styled-components';

const BookingTitle = styled.h3`
    background-color:#F4F06B;
    width: 50%;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(125,120,57,1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(125,120,57,1);
    box-shadow: 10px 10px 5px 0px rgba(125,120,57,1);
`


const BookingList = ({bookings, removeBooking, updateCheckIn}) => {
    console.log(bookings)
    const BookingData = bookings.map( (booking) =>{
        return <BookingElement booking={booking} key={booking._id} removeBooking={removeBooking} updateCheckIn={updateCheckIn}/>
    }) 
     
    return(
        <>
            <BookingTitle><strong>Bookings</strong></BookingTitle>
            {BookingData}
        </>
    )
}

export default BookingList;