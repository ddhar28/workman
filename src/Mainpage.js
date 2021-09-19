import { useState } from 'react';
import BookingForm from './booking/BookingForm';
import BookingList from './booking/BookingList';
import './App.css';

function Mainpage() {
    const [isBooking, setIsBooking] = useState(false)
    const [eventList, setEventList] = useState([
        { title: 'event 1', date: '2021-09-20' },
        { title: 'event 2', date: '2021-09-23' }
      ])

    const addEvent = (event) => {
        const events = [...eventList,event]
        setEventList(events)
    }

    const toggleBooking = () => {
        setIsBooking(!isBooking);
    }

    return (
        <div className="App">
            <header className="App-header">
                Workman
            </header>
            {isBooking ?
                <BookingForm toggleBooking={toggleBooking} addEvent={addEvent} />
                : <div className='book'>
                <button id='create-booking' onClick={toggleBooking} >Create new booking</button>
                <BookingList events={eventList}/>
              </div>}
        </div>
    )
}

export default Mainpage;