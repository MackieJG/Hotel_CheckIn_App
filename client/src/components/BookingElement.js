const BookingElement = ({booking}) => {
    return (
        <>
        <h1>this is the single booking</h1>

         <p>{booking.name}</p>
         <p>{booking.email}</p>
         <p>{booking.status}</p>
        </>
    )
}

export default BookingElement;