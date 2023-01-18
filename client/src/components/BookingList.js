import BookingElement from './BookingElement'

const BookingList = ({bookings, removeBooking}) => {
    console.log(bookings)
    const BookingData = bookings.map( (booking) =>{
        return <BookingElement booking={booking} key={booking._id} removeBooking={removeBooking}/>
    }) 
     
    return(
        <>
            <p>this is booking list</p>
            {BookingData}
        </>
    )
}

export default BookingList;