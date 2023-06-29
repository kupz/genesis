import "./form.scss";
export default function Form() {
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
        </div>
      </form>
    </div>
  );
}
