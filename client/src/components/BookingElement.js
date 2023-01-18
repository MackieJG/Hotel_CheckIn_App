const BookingElement = ({booking}) => {
    return (
        <>
        <p>this is the single booking</p>

         <p>{booking.name}</p>
         <p>{booking.email}</p>
         <p>{booking.status}</p>
        </>
    )
}

export default BookingElement;