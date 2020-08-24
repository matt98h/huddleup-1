import React, { Component } from "react";
import '../../src/App.css';
import Navbar from '../components/Navbar/Navbar';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import "import AddToCalendar from 'react-add-to-calendar;"

const localizer = momentLocalizer(moment);
const EventCalendar = withDragAndDrop(Calendar);
class Schedule extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(0, "days").toDate(),
        title: "Some title",
      },
    ],
  };
//  createEvent =(data) => {}

  onEventResize = (data) => {
    const { start, end } = data;
    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = (data) => {
    console.log(data);
  };
  
  render() {
    return (
      <div className="Schedule">
        <Navbar />
        <EventCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}
export default Schedule;



