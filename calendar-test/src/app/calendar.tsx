"use client"

import React, { forwardRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = forwardRef(({ events }, ref) => {
    return (
        <FullCalendar
            ref={ref}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
        />
    );
});

export default Calendar;