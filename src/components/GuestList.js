import Guest from "./Guest";
import "./guestlist.scss";
import changePage from "../redux/pageSlice";
import Home from "../pages/Home";
import { useDispatch } from "react-redux";
export default function GuestList() {
  const dispatch = useDispatch();

  const chagePage = () => dispatch(changePage(<Home />));

  return (
    <>
      <button className="button-home" onClick={chagePage}>
        Back to Home
      </button>
      <div className="guestlist">
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
      </div>
    </>
  );
}
