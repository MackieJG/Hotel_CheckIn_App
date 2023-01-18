const BookingElement = ({booking}) => {
    return (
        <>
         <p>{booking.name}</p>
         <p>{booking.email}</p>
         <p>{booking.status}</p>
        </>
    )
}

export default BookingElement;