import { useState, useEffect } from 'react';
import BookingForm from './booking/BookingForm';
import BookingList from './booking/BookingList';
import Login from './Login';
import './App.css';

function Mainpage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isBooking, setIsBooking] = useState(false)
    const [eventList, setEventList] = useState([])
        
    const getOrders = async () => {
        let res = await fetch('/get-my-orders', {
            method:'GET'})
        res = res.json()
        const { orders } = res
        let events = []
        orders.forEach(order => {
            events.add({
                title: `${order.equipment_id} repair service`,
                date: order.start_date
            })
        });

        setEventList(events)
    }

    useEffect(() => {
        getOrders()
      })

    const toggleBooking = () => {
        setIsBooking(!isBooking);
    }

    const getBooking = () => {
        return (
            <>
            {isBooking ?
                <BookingForm toggleBooking={toggleBooking} />
                : <div className='book'>
                <button id='create-booking' onClick={toggleBooking} >Create new booking</button>
                <BookingList events={eventList}/>
                </div>}
            </>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                Workman
            </header>
            {isLoggedIn ? getBooking() : <Login setIsLoggedIn={setIsLoggedIn} />}
        </div>
    )
}

export default Mainpage;