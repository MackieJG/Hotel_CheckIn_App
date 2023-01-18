import React, { useState } from 'react';

const BookingForm = () => {

    [formData, setFormData] = useState({
        name: "",
        email: "",
        status: false,
    })


    return (
        <form>
            <h2>Add Booking</h2>
            <div>
                <label>Name:</label>
                <input type='text' name='name' value={formData.name} />
            </div>
            <div>
                <label>E-mail:</label>
                <input type='email' name='email' value={formData.email} />
            </div>
            <div>
                <label>Status:</label>
                <input type='checkbox' name='status' value={formData.status} />
            </div>
            <input type='submit' />
        </form>
    )
}

export default BookingForm;