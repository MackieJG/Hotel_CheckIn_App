import BookingElement from './BookingElement'

const BookingList = ({bookings}) => {
    const BookingData = bookings.map( (booking) =>{
        return <BookingElement booking={booking} key={booking._id} />
    }) 
     
    return(
        <>

            {BookingData}
        </>
    )
}

export default BookingList;