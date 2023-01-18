import { deleteBooking } from "./BookingService";

const BookingElement = ({booking, removeBooking}) => {
    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id);
        })
    }
    return (
        <>
        
        
         <p>{booking.name}</p>
         <p>{booking.email}</p>
         <p>{booking.status}</p>
         <button onClick={handleDelete}>Bolt</button>
        </>
    )
}

export default BookingElement;