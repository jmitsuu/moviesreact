import { useAvaliationStars } from "@/hooks/useAvaliationStars";
import { Progress } from "../ui/progress";

interface typeBar {
  vote:number,
  total:any
}
export function BarProgressAvaliation({total}:typeBar){

  return(
    <div className="flex items-center gap-2">
    {" "}
    <span className="text-yellow-500 flex  ">
     {useAvaliationStars(total.vote)}
    </span>{" "}
    <Progress value={50} className="h-2  " />{" "}
    <h1 className="text-center text-xs">({total.vote}) reviews</h1>
   </div>
  )
}