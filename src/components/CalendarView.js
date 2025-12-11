import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useSelector, useDispatch } from "react-redux";
import { selectDate } from "../redux/calendarSlice";
import DataPopup from "./DataPopup";


const CalendarView = () => { 
const localizer = momentLocalizer(moment);
const dispatch = useDispatch()
  const data = useSelector((state) => state.calendar.data);
  const selectedDate = useSelector((state) => state.calendar.selectedDate);

  const [popupOpen, setPopupOpen] = useState(false);
 const events = Object.keys(data).map((date) => ({
    title: `Data Available`,
    start: new Date(date),
    end: new Date(date),
  }));
 const handleSelect = (slotInfo) => {
    const dateStr = moment(slotInfo.start).format("YYYY-MM-DD");
    dispatch(selectDate(dateStr));
    setPopupOpen(true);
  };
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
      {popupOpen && (
        <DataPopup open={popupOpen} setOpen={setPopupOpen} />
      )}
    </div>
)
}

export default CalendarView
