import { Input } from "@/components/ui/input";
import { SlMagnifier } from "react-icons/sl";
export function Header() {
 return (
  <main className="relative w-full h-20">
   <header className="w-full h-20 fixed  bg-[#242029] z-50 flex items-center justify-between px-10">
    <div className="gap-10  flex items-center">
     <div className="flex flex-col items-center justify-center">
    
      <div className="text-xl text-gray-200 font-bold bg-black uppercase border-2 p-2 rounded  border-red-500 shadow-red-500 shadow-md">
      <h2 className="  ">Reviews</h2>

      </div>
     </div>
     <div className=" relative">
      <SlMagnifier className="absolute top-2 -right-3 " />
      <Input
       className="h-7 bg-transparent ml-5 border-none  outline-none focus-visible:bg-black "
       placeholder="Pesquise aqui..."
      />
     </div>
    </div>

    <div className="flex items-center gap-2">
     <div>
      <h3 className="text-xs text-gray-400">Hello</h3>
      <h1 className="text-gray-200">Joe Doe</h1>
     </div>
     <div className="h-10 w-10 rounded-full bg-red-300"></div>
    </div>
   </header>
  </main>
 );
}
