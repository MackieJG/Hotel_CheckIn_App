import { deleteBooking } from "./BookingService";
import styled from "styled-components";

const Card = styled.div`
background-color:#F4F06B;
width: 50%;
-webkit-box-shadow: 10px 10px 5px 0px rgba(125,120,57,1);
-moz-box-shadow: 10px 10px 5px 0px rgba(125,120,57,1);
box-shadow: 10px 10px 5px 0px rgba(125,120,57,1);
`

const BookingElement = ({booking, removeBooking, updateBooking}) => {
    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id);
        })
    }

    const changeStatus = () => {
        updateBooking(booking._id).then(()=> {
            updateCheckIn(booking._id)
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