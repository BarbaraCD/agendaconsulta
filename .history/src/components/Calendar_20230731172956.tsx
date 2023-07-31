import React from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/pt-br'; // Importe o locale desejado

moment.locale('pt-br'); // Defina o locale para 'pt-br'

const MyCalendar: React.FC = () => {
  // ... seu código do calendário aqui ...

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
