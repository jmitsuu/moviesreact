import { useAvaliationStars } from "@/hooks/useAvaliationStars";
import { useDateConverter } from "@/hooks/useDateConverter";
interface typeReview {
 date: string;
 vote: number;
 comment: string;
}
export function ProfileReview({ date, vote, comment }: typeReview) {
 return (
  <div className="mt-5  p-4 rounded-md border  shadow  ">
   <div className="flex items-center gap-2  ">
    <div className="h-10 w-10 rounded-full bg-slate-700"></div>
    <div className="border-r-2 pr-4 ">
     <h1 className="text-xl">Anonimo</h1>
     <div className="flex items-center  gap-2">
      {" "}
      <span className="text-yellow-500 flex text-xl">
       {useAvaliationStars(vote)}
      </span>{" "}
     </div>
    </div>

   </div>

   <div className=" ">
    <div>
     <div className=" flex mt-8    items-center mb-5 border-t pt-1 ">
      {" "}
      <h1 className="text-[0.9rem]">data:</h1>{" "}
      <h2 className="text-black font-bold text-[0.9rem]">{useDateConverter(date)}</h2>
     </div>
    </div>
    <div className="w-full justify-center text-gray-600 font-bold">{comment}</div>
   </div>
  </div>
 );
}
