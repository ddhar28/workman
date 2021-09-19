import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './booking.css';

function BookingList() {
    const [eventList, setEventList] = useState([])

    return (
        <div className='bookingList'>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={[
                    { title: 'event 1', date: '2021-09-20' },
                    { title: 'event 2', date: '2021-09-23' }
                  ]}
            />
        </div>
    )
}

export default BookingList;