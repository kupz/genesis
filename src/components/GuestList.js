import Guest from "./Guest";
import "./guestlist.scss";
import { useEffect, useState } from "react";
import { guestIndex } from "../Api";
import { Link } from "react-router-dom";
export default function GuestList() {
  const [guestList, setGuestList] = useState([]);

  const GuestList = ({ guests }) => {
    return guests.map((guest) => <Guest {...guest} key={guest.id} />);
  };

  useEffect(() => {
    guestIndex().then((res) => {
      setGuestList(res.data);
    });
  }, []);

  return (
    <>
      <div className="button-home">
        <Link to="/">Back to Home</Link>
      </div>
      <div className="guestlist">
        <GuestList guests={guestList} />
      </div>
    </>
  );
}
