import BookingElement from './BookingElement'

const BookingList = ({bookings, removeBooking}) => {
    const BookingData = bookings.map( (booking) =>{
        return <BookingElement booking={booking} key={booking._id} removeBooking={removeBooking}/>
    }) 
     
    return(
        <>

            {BookingData}
        </>
    )
}

export default BookingList;