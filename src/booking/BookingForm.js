import react,{ useState, useForm } from 'react';
import './booking.css';

function BookingForm({toggleBooking, addEvent}) {
    const [isComplete, setIsComplete] = useState(false)
    const [facility, setFacility] = useState("")
    const [equipment, setEquipment] = useState("")
    const [priority, setPriority] = useState("")

    const confirmBooking = async () => {
        // const event = { title: `${equipment} repair request`, date: '2021-09-30' }

        let res = await fetch('/create-order', {
            method:'POST',
            body:JSON.stringify({
                facility_id: facility, 
                equipment_type: equipment,
                priority })
        })

        res = await res.json()

        // addEvent(event)
        setIsComplete(true)
    }



    function getNewForm(confirmBooking) {
        return (
            <>
                <div>New order request</div>
                <div className='formInput'>
                    <p>Facility</p>
                    <select name='facility' id='facility' onChange={(e) => setFacility(e.target.value)}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>
                <div className='formInput'>
                    <p>Equipment type</p>
                    <select name='equipment' id='equipment' onChange={(e) => setEquipment(e.target.value)}>
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
                    <select name='priority' id='priority' onChange={(e) => setPriority(e.target.value)}>
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


export default BookingForm;