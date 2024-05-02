import { Outlet } from "react-router-dom";
import "./index.css";

function App() {
 return (
  <div className=" m-20 ">
   <Outlet />
  </div>
 );
}

export default App;
