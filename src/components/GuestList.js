import Guest from "./Guest";
import "./guestlist.scss";
import {changePage} from "../redux/pageSlice";
import Home from "../pages/Home";
import { useDispatch } from "react-redux";
export default function GuestList({guests}) {
  const dispatch = useDispatch();
  
  const backHome = () => dispatch(changePage(<Home />));

  const GuestList = ({guests}) => {
    return (
      guests.map(guest => <Guest {...guest} />)
    )
  }

  return (
    <>
      <button className="button-home" onClick={backHome}>
        Back to Home  
      </button>
      <div className="guestlist">
        <GuestList guests={guests} />
      </div>
    </>
  );
}
