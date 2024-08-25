"use client"

import { useRef, useState } from "react";
import Calendar from "./calendar";
import { createICSFileFromFullCalendar, downloadICSFile } from "./ics"

export default function Home() {


  const calendarRef = useRef(null);

  const [events, setEvents] = useState([
    {
      start: new Date('2024-08-25T10:00:00'),
      end: new Date('2024-08-25T11:00:00'),
      title: '윤하팀 연습',
      extendedProps: {
        description: "사건의 지평선",
        location: '집'
      }
    },
    {
      start: new Date('2024-08-26T13:00:00'),
      end: new Date('2024-08-26T14:00:00'),
      title: '엔플라잉팀 연습',
      extendedProps: {
        description: "Flower Fantasy",
        location: '집'
      }
    }
  ]);

  const handleDownload = () => {
    const calendarApi = calendarRef.current.getApi();
    const events = calendarApi.getEvents();
    const icsContent = createICSFileFromFullCalendar(events);
    downloadICSFile('fullcalendar-events.ics', icsContent);

  }

  return (
    <div>
      <Calendar events={events} ref={calendarRef} />
      <button onClick={handleDownload}>ics 파일로 다운로드</button>
    </div>
  );
}
