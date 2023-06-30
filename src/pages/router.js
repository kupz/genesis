import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import GuestList from "../components/GuestList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/guests",
    element: <GuestList />,
  },
]);

export { router };
