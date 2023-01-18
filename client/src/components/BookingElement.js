import { deleteBooking } from "./BookingService";
import styled from "styled-components";

const Card = styled.div`

`

const BookingElement = ({booking, removeBooking}) => {
    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id);
        })
    }

    const changeStatus = () => {
        // updateBooking(booking._id)
    }
    return (
        <>
        
        
         <p>{booking.name}</p>
         <p>{booking.email}</p>
         <button onClick={changeStatus}>{booking.status ? 'checked in' : 'not checked in'}</button>
         <button onClick={handleDelete}>Bolt</button>
        </>
    )
}

export default BookingElement;