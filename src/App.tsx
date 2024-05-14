import { Outlet } from "react-router-dom";
import "./index.css";

function App() {
 return (
  <div className=" m-20 px-4">
   <Outlet />
  </div>
 );
}

export default App;
