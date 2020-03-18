import React from "react";
import { Button } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default class Calendar extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
          }}
        >
          <div
            style={{
              height: "700px",
              width: "800px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <FullCalendar
              defaultView="dayGridMonth"
              plugins={[dayGridPlugin, interactionPlugin]}
              dateClick={this.props.action}
              events={this.props.events}
            />
          </div>
        </div>
      </>
    );
  }
}
