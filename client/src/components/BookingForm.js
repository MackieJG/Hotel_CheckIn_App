import React, { useState } from 'react';
import { postBooking } from './BookingService';

const BookingForm = ({ addBooking }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        status: false,
    })

    const onChange = (event) => {
        const newFormData = Object.assign({}, formData)
        newFormData[event.target.name] = 
            event.target.type === "checkbox" ? 
                event.target.checked : event.target.value
        setFormData(newFormData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data);
        })
    }


    return (
        <form onSubmit={onSubmit}>
            <h2>Add Booking</h2>
            <div>
                <label>Name:</label>
                <input 
                        onChange={onChange}
                        type='text'
                        id='name' 
                        name='name' 
                        value={formData.name}
                        required
                />
            </div>
            <div>
                <label>E-mail:</label>
                <input 
                        onChange={onChange}
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        required
                />
            </div>
            <div>
                <label>Checked In?</label>
                <input 
                        onChange={onChange} 
                        type='checkbox'
                        id='status' 
                        name='status' 
                        value={formData.status} />
            </div>
            <input type='submit' />
        </form>
    )
}

export default BookingForm;