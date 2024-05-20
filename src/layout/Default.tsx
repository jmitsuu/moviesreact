import App from "@/App";
import { Header } from "@/components/Header";
import { MenuAside } from "@/components/MenuAside";
export function Default() {
 return (
  <div className=" relative   bg-white   overflow-hidden ">
   <Header />
   <div className="flex  " >
    <MenuAside />
    <App />
   </div>
  </div>
 );
}
