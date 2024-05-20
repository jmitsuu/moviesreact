import { Outlet } from "react-router-dom";
import "./index.css";

function App() {
 return (
  <div className=" items-center flex flex-col px-10     mt-20 ">
   <Outlet />
  </div>
 );
}

export default App;
