import { deleteBooking } from "./BookingService";
import styled from "styled-components";

const Card = styled.div`
background-color:#F4F06B;
width: 50%;
`

const BookingElement = ({booking, removeBooking, updateBooking}) => {
    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id);
        })
    }

    const changeStatus = () => {
        updateBooking(booking._id).then(()=> {
            updateBooking(booking._id)
        })
        
    }
    return (
        <Card>
         <h4>{booking.name}</h4>
         <p>{booking.email}</p>
         <button onClick={changeStatus}>{booking.status ? 'checked in' : 'not checked in'}</button>
         <button onClick={handleDelete}>Bolt</button>
        </Card>
    )
}

export default BookingElement;