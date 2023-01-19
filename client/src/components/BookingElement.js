import { deleteBooking } from "./BookingService";
import styled from "styled-components";
import { updateBooking } from "./BookingService";

const Card = styled.div`
background-color:#F4F06B;
width: 50%;
-webkit-box-shadow: 10px 10px 5px 0px rgba(125,120,57,1);
-moz-box-shadow: 10px 10px 5px 0px rgba(125,120,57,1);
box-shadow: 10px 10px 5px 0px rgba(125,120,57,1);
`

const BookingElement = ({booking, removeBooking, updateCheckIn}) => {
    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id);
        })
    }

    const changeStatus = () => {
        const temp = {...booking}
        temp.status = !temp.status
        delete temp._id

        updateBooking(booking._id, temp).then(()=> {
            updateCheckIn(booking._id, temp)
        })
        
    }
    return (
        <Card>
         <h4>{booking.name}</h4>
         <p>{booking.email}</p>
         <button onClick={changeStatus}>{booking.status ? 'Checked In' : 'Not Checked In'}</button>
         <button onClick={handleDelete}>Delete</button>
        </Card>
    )
}

export default BookingElement;