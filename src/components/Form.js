import "./form.scss";
import { useDispatch } from "react-redux";
import { toggleModal } from "../redux/modalSlice";
import { guestStore } from "../Api";

export default function Form({ code }) {
  const dispatch = useDispatch();
  let gender = 1;
  let isAdult = 1;
  const imageChange = (e) => {
    const [file] = e.target.files;
    if (file) {
      const formImage = document.getElementById("form-img");
      formImage.style.backgroundImage = `url('${URL.createObjectURL(file)}')`;
      formImage.innerText = "";
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const guestForm = new FormData();
    guestForm.append("code", code);
    guestForm.append("firstname", document.getElementById("firstname").value);
    guestForm.append("lastname", document.getElementById("lastname").value);
    guestForm.append("isAdult", isAdult);
    guestForm.append("gender", gender);
    guestForm.append("image", document.getElementById("uploadImage").files[0]);

    guestStore(guestForm).then((res) => {
      if(res.ok){
        dispatch(toggleModal());
        alert("Attendance confirmed!")
      }
      else{
        if(res?.errors){
          Object.keys(res.errors).forEach(error => {
            alert(res.errors[error])
          })
        }
        else{
          if(res?.message){
            alert(res.message)
          }
        }
      }
    });
  };
  const genderChange = (e) => {
    gender = e.target.value;
  };
  const isAdultChange = (e) => {
    isAdult = e.target.value;
  };
  return (
    <div className="form-container">
      <form
        id="guestForm"
        onSubmit={(e) => onSubmit(e)}
        className="form"
        method="POST"
        encType="multipart/form-data"
      >
        <div>
          <label htmlFor="uploadImage">
            <div
              id="form-img"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "10em",
                height: "10em",
              }}
              className="form-img"
            >
              Upload selfie
            </div>
          </label>
          <input
            name="image"
            onChange={(e) => imageChange(e)}
            id="uploadImage"
            accept="image/png, image/jpeg"
            type="file"
            style={{ display: "none" }}
          />
        </div>
        <div>
          <input
            required
            id="firstname"
            type="text"
            name="firstname"
            placeholder="First Name"
          />
          <input
            required
            id="lastname"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
          <select
            required
            onChange={genderChange}
            id="isMale"
            name="isMale"
            id=""
          >
            <option value={1}>Male</option>
            <option value={0}>Female</option>
            <option value={2}>I'd rather not specify</option>
          </select>
          <select
            required
            onChange={isAdultChange}
            id="isAdult"
            name="isAdult"
            id=""
          >
            <option value={1}>Adult</option>
            <option value={0}>Child</option>
          </select>
          <input type="submit" name="submit" className="btn-submit" />
        </div>
      </form>
    </div>
  );
}
