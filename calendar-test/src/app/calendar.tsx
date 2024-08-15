"use client"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dateClick


export default function Calendar() {

    const handleDateClick = (arg: any) => {
        alert(JSON.stringify(arg));
    }

  return (
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
    />
  );
}
