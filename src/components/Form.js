import "./form.scss";
import { useDispatch } from "react-redux";
import { toggleModal } from '../redux/modalSlice'
export default function Form() {
  const dispatch = useDispatch()
  return (
    <div className="form-container">
      <form className="form">
        <div>
          <div className="form-img">Upload selfie</div>
          <input type="file" style={{ display: "none" }} />
        </div>
        <div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Lastname" />
          <select name="gender" id="">
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="not sure">I'd rather not specify</option>
          </select>
          <select name="type" id="">
            <option value="adult">Adult</option>
            <option value="kid">kid</option>
            <option value="baby">baby</option>
          </select>
          <input type="submit" name="submit" className="btn-submit" />

        </div>
      </form>
    </div>
  );
}
