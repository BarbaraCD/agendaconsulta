import React from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br'); 

interface MyEvent extends Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

const MyCalendar: React.FC = () => {
  

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
