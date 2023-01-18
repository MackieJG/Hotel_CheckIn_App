import BookingElement from './BookingElement'

const BookingList = ({bookings, removeBooking}) => {
    console.log(bookings)
    const BookingData = bookings.map( (booking) =>{
        return <BookingElement booking={booking} key={booking._id} removeBooking={removeBooking}/>
    }) 
     
    return(
        <>
            <h3><strong>Bookings</strong></h3>
            {BookingData}
        </>
    )
}

export default BookingList;