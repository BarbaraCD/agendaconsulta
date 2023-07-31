import moment from 'moment';
import React from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Defina o tipo para os eventos do calendário
interface MyEvent extends Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

const MyCalendar: React.FC = () => {
  const localizer = momentLocalizer(moment)
  const events: MyEvent[] = [
    {
      id: 1,
      title: 'Evento 1',
      start: new Date(2023, 7, 1, 10, 0), // 1º de agosto de 2023, 10:00
      end: new Date(2023, 7, 1, 12, 0), // 1º de agosto de 2023, 12:00
    },
    {
      id: 2,
      title: 'Evento 2',
      start: new Date(2023, 7, 2, 14, 0), // 2 de agosto de 2023, 14:00
      end: new Date(2023, 7, 2, 16, 0), // 2 de agosto de 2023, 16:00
    },
  ];

  return (
    <div>
      <Calendar
        localizer={localizer} // Forneça a configuração de localização conforme necessário
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }} // Ajuste a altura conforme necessário
      />
    </div>
  );
};

export default MyCalendar;
