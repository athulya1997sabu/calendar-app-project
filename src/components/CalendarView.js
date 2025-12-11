import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useSelector } from "react-redux";
import "react-big-calendar/lib/css/react-big-calendar.css";


const CalendarView = () => { 
const localizer = momentLocalizer(moment);
  const data = useSelector((state) => state.calendar.data);
 const events = Object.keys(data).map((date) => ({
    title: `Data Available`,
    start: new Date(date),
    end: new Date(date),
  }));
  const handleSelect = () => {

  }
return (
 <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelect}
        eventPropGetter={(event) => ({
          style: { backgroundColor: "#4BCD3E", color: "white" },
        })}
      />
 </div>
)
}

export default CalendarView
