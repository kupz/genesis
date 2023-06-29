import "./main.scss";
import { useSelector } from "react-redux";
function App() {
  const currentPage = useSelector((state) => state.page);
  return (
    <div className="App">
      <currentPage />
    </div>
  );
}

export default App;
