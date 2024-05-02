import { useAvaliationStars } from "@/hooks/useAvaliationStars";
import { useDateConverter } from "@/hooks/useDateConverter";
interface typeReview {
 date: string;
 vote: number;
 comment: string;
}
export function ProfileReview({ date, vote, comment }: typeReview) {
 return (
  <div className="mt-10  p-4 rounded-md flex   shadow w-full ">
   <div className="flex items-center gap-2 max-w-full ">
    <div className="h-10 w-10 rounded-full bg-slate-700"></div>
    <div className="border-r-2 pr-2 ">
     <h1>Anonimo</h1>
     <div className="flex items-center  gap-2">
      {" "}
      <span className="text-yellow-500 flex text-xs">
       {useAvaliationStars(vote)}
      </span>{" "}
     </div>
    </div>
    <div className="text-gray-500 max-w-80 text-center  border-2 font-bold"></div>
   </div>

   <div className="w-48  ">
    <div>
     <div className=" flex gap-1 items-center mb-5 border-b">
      {" "}
      <h1 className="text-[0.8rem]">data:</h1>{" "}
      <h2 className="text-black font-bold text-xs">{useDateConverter(date)}</h2>
     </div>
    </div>
    <div>{comment}</div>
   </div>
  </div>
 );
}
