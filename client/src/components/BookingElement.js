import { deleteBooking } from "./BookingService";
import styled from "styled-components";
import { updateBooking } from "./BookingService";

const Card = styled.div`
background-color:#F4F06B;
width: 50%;
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
         <button onClick={changeStatus}>{booking.status ? 'checked in' : 'not checked in'}</button>
         <button onClick={handleDelete}>Bolt</button>
        </Card>
    )
}

export default BookingElement;