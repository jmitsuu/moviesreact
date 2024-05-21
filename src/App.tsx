import { Outlet, useLocation } from "react-router-dom";
import "./index.css";
import { useLayoutEffect } from "react";

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
   window.scrollTo(0, 0);
  }, [location.pathname]);
 return (
  <div className=" items-center flex flex-col px-10     mt-20 ">
   <Outlet />
  </div>
 );
}

export default App;
