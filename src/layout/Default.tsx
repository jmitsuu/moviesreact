import App from "@/App";
import { Header } from "@/components/Header";
import { MenuAside } from "@/components/MenuAside";
export function Default() {
 return (
  <div className=" relative  bg-whiteoverflow-hidden ">
   <Header />
   <div className="flex overflow-hidden w-screen" >
    <MenuAside />
    <App />
   </div>
  </div>
 );
}
