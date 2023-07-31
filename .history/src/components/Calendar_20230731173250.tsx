import React from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/pt-br'; // Importe o locale desejado

moment.locale('pt-br'); // Defina o locale para 'pt-br'

const MyCalendar: React.FC = () => {
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
        localizer={moment} // Utilize o objeto moment como localizer
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;
