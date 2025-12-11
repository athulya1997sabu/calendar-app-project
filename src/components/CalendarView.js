import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
const CalendarView = () => { 
const localizer = momentLocalizer(moment);
return (
 <div>
      <Calendar
        localizer={localizer}
        // events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        // onSelectSlot={handleSelect}
        eventPropGetter={(event) => ({
          style: { backgroundColor: "#4BCD3E", color: "white" },
        })}
      />
 </div>
)
}

export default CalendarView
