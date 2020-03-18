import LandingPage from "../views/landing";
import EventPage from "../views/event";

const routes = [
  {
    path: "/",
    exact: true,
    component: LandingPage,
    id: "home"
  },
  {
    path: "/event",
    exact: true,
    component: EventPage,
    id: "EventPage"
  }
];

export default routes;
