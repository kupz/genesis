import "./guest.scss";
import {imageURL} from "../Api";

export default function Guest({firstname, lastname, isAdult, gender, invitation, id, extension}) {
  return (
    <>
      <div className="guest-container">
        <div style={{backgroundImage: `url("${imageURL}${id}.${extension}")`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="guest-img"></div>
        <div className="guest-info">
          <span>{`${firstname} ${lastname}`}</span> 
          <span>{isAdult ? "Adult" : "Child"}</span> 
          <span>{gender === 2 ? "Unknown" : gender === 1 ? "Male" : "Female"}</span>
          <span>{invitation.type}</span>
        </div>
      </div>
    </>
  );
}
