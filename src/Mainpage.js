import { useState } from 'react';
import BookingForm from './booking/BookingForm';
import BookingList from './booking/BookingList';
import './App.css';

function Mainpage() {
    const [isBooking, setIsBooking] = useState(false)

    const toggleBooking = () => {
        setIsBooking(!isBooking);
    }

    return (
        <div className="App">
            <header className="App-header">
                Workman
            </header>
            {isBooking ?
                <BookingForm toggleBooking={toggleBooking}/>
                : <div className='book'>
                <button id='create-booking' onClick={toggleBooking} >Create new booking</button>
                <BookingList />
              </div>}
        </div>
    )
}

export default Mainpage;