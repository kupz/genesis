import "./main.scss";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";
function App() {
  const currentPage = useSelector((state) => state.page);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
