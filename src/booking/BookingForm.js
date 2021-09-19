import react,{ useState, useForm } from 'react';
import './booking.css';

function BookingForm({toggleBooking}) {
    const [isComplete, setIsComplete] = useState(false)

    const confirmBooking = () => {
        setIsComplete(true)
    }

    return (
        <div className='bookingForm'>
            {isComplete ? 
            <>
                <div>Booking Confirmed!</div>
                <button id='view-booking' onClick={toggleBooking}>View your bookings</button>
            </>
            :getNewForm(confirmBooking)}
        </div>
    )
}

function getNewForm(confirmBooking) {
    return (
        <>
            <div>New order request</div>
            <div className='formInput'>
                <p>Facility</p>
                <select name='facility' id='facility'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </div>
            <div className='formInput'>
                <p>Equipment type</p>
                <select name='equipment' id='equipment'>
                    <option value='Pump'>Pump</option>
                    <option value='Compressor'>Compressor</option>
                    <option value='Seperator'>Seperator</option>
                    <option value='Sensor'>Sensor</option>
                    <option value='Security'>Security</option>
                    <option value='Electricity'>Electricity</option>
                    <option value='Networking'>Networking</option>
                    <option value='Vehicle'>Vehicle</option>
                    <option value='HVAC'>HVAC</option>
                    <option value='Conveyer'>Conveyer</option>
                </select>
            </div>
            <div className='formInput'>
                <p>Priority</p>
                <select name='priority' id='priority'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </div>       
            <button id='confirm-booking' onClick={confirmBooking}>Confirm Booking</button>
        </>
    )
}


export default BookingForm;