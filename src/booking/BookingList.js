import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './booking.css';

function BookingList({events}) {

    return (
        <div className='bookingList'>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={events}
            />
        </div>
    )
}

export default BookingList;