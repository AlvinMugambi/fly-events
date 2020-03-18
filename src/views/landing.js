import React from "react";
import Header from "../components/header";
import Calendar from "../components/calendar";
import DropdownFixedNavbar from "../components/navbar";
import Cards from "../components/card";
const party = require("../assets/img/party.jpg");
const live = require("../assets/img/pic2.jpg");
const table = require("../assets/img/pic4.jpg");

export default class LandingPage extends React.Component {
  state = {
    events: [
      {
        title: "Color Festival",
        date: "2020-03-17",
        eventOwner: "AlvoMugz",
        description:
          "Eres' daring 'Grigri Fortune' swimsuit has the fit andcoverage of a bikini in a one-piece silhouette. Thisfuchsia style is crafted from the label's sculptingpeau douce fabric and has flattering cutouts throughthe torso and back. Wear yours with mirroredsunglasses on vacation.",
        location: "Nairobi",
        startTime: "5pm",
        endTime: "10pm",
        image: party,
        eventImages: [
          {
            src: require("../assets/img/party2.jpg"),
            altText: "",
            caption: ""
          },
          {
            src: require("../assets/img/party1.jpg"),
            altText: "",
            caption: ""
          },
          {
            src: require("../assets/img/party.jpg"),
            altText: "",
            caption: ""
          }
        ]
      },
      {
        title: "Inuka Live",
        date: "2020-03-19",
        eventOwner: "AlvoMugz",
        description:
          "Eres' daring 'Grigri Fortune' swimsuit has the fit andcoverage of a bikini in a one-piece silhouette. Thisfuchsia style is crafted from the label's sculptingpeau douce fabric and has flattering cutouts throughthe torso and back. Wear yours with mirroredsunglasses on vacation.",
        location: "Michael Joseph Center",
        startTime: "5pm",
        endTime: "10pm",
        image: live,
        eventImages: [
          {
            src: require("../assets/img/pic_4.jpg"),
            altText: "",
            caption: ""
          },
          {
            src: require("../assets/img/pic_5.jpg"),
            altText: "",
            caption: ""
          },
          {
            src: require("../assets/img/pic_6.jpg"),
            altText: "",
            caption: ""
          }
        ]
      },
      {
        title: "Propak East Africa",
        date: "2020-03-18",
        eventOwner: "AlvoMugz",
        description:
          "Eres' daring 'Grigri Fortune' swimsuit has the fit andcoverage of a bikini in a one-piece silhouette. Thisfuchsia style is crafted from the label's sculptingpeau douce fabric and has flattering cutouts throughthe torso and back. Wear yours with mirroredsunglasses on vacation.",
        location: "Sarit Center",
        startTime: "5pm",
        endTime: "10pm",
        image: table,
        eventImages: [
          {
            src: require("../assets/img/pic_1.jpg"),
            altText: "",
            caption: ""
          },
          {
            src: require("../assets/img/pic_2.jpg"),
            altText: "",
            caption: ""
          },
          {
            src: require("../assets/img/pic_3.jpg"),
            altText: "",
            caption: ""
          }
        ]
      }
    ],
    sortedEvents: []
  };

  componentDidMount = () => {
    this.sortEvents();
  };

  sortEvents = () => {
    const { events } = this.state;
    let sortedEvents = events.sort(
      (a, b) =>
        new Date(...a.date.split("/").reverse()) -
        new Date(...b.date.split("/").reverse())
    );
    this.setState({
      sortedEvents
    });
  };

  handleDateClick = arg => {
    const { events, sortedEvents } = this.state;
    events.forEach((event, i) => {
      if (event.date === arg.dateStr) {
        this.setState({
          sortedEvents: [event]
        });
      }
    });
  };

  createEvent = (
    pictures,
    eventName,
    eventOwner,
    description,
    location,
    startTime,
    endTime,
    date
  ) => {
    if (!eventName) {
      return;
    } else if (!date) {
      return;
    }
    const newEvent = {
      title: eventName,
      date: date,
      eventOwner,
      description,
      location,
      startTime,
      endTime
    };
    this.setState(
      {
        events: this.state.events.concat(newEvent)
      },
      () => {
        this.sortEvents();
      }
    );
  };

  render() {
    const { sortedEvents, events } = this.state;
    return (
      <>
        <DropdownFixedNavbar />
        <Header createEvent={this.createEvent} />
        <Calendar action={this.handleDateClick} events={events} />
        <Cards events={sortedEvents} />
      </>
    );
  }
}
