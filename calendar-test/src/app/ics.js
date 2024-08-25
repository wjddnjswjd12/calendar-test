export function reformatDateToIcs(date) {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}
export const createICSFileFromFullCalendar = (events) => {
    let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Organization//Your Product//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
`;

    events.forEach(event => {
        icsContent += `BEGIN:VEVENT
DTSTART:${reformatDateToIcs(event.start)}
DTEND:${reformatDateToIcs(event.end)}
SUMMARY:${event.title || ''}
DESCRIPTION:${event.extendedProps.description || ''}
LOCATION:${event.extendedProps.location || ''}
STATUS:CONFIRMED
SEQUENCE:0
TRANSP:OPAQUE
END:VEVENT
`;
    });

    icsContent += `END:VCALENDAR`;

    return icsContent;
};

export const downloadICSFile = (filename, content) => {
    const blob = new Blob([content], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};
