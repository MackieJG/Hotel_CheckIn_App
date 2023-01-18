import React, { useState } from 'react';

const BookingForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        status: false,
    })

    const onChange = (event) => {
        const newFormData = Object.assign({}, formData)
        newFormData[event.target.name] = event.target.value
        setFormData(newFormData);
    }


    return (
        <form>
            <h2>Add Booking</h2>
            <div>
                <label>Name:</label>
                <input 
                        onChange={onChange}
                        type='text'
                        id='name' 
                        name='name' 
                        value={formData.name} 
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
                />
            </div>
            <div>
                <label>Status:</label>
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