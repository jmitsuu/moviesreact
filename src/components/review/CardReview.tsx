import { useAvaliationStars } from "@/hooks/useAvaliationStars";

interface typeCardReview{
  title:string,
  vote:number,
  data:any,
  listTop:number,
  backdrop:string
}
export function CardReview({title, vote, data, listTop, backdrop}:typeCardReview) {
  const urlImage = "https://image.tmdb.org/t/p/w500";
  const url = urlImage+backdrop;
  return(
    <div 
    style={{ backgroundImage: `url(${url}) ` }}
    className="w-full flex items-center cursor-pointer bg-center   hover:shadow-blue-800 shadow-md transition duration-500 h-20 mb-1 bg-black rounded-md scale-90">
      <div className="w-screen h-full bg-black/50 flex items-center justify-between px-10 rounded-md">
      <h1 className="text-gray-50 text-4xl m-1">#{listTop}</h1>  
     <div className="w-72">
      <h1 className="text-gray-100 font-bold">{title}</h1>
     <div className="flex items-center gap-1 text-yellow-400 ">
     <h2 className="text-yellow-400 font-bold">{(vote/data).toFixed(1)}</h2>
     {useAvaliationStars(vote /data)}
     </div>

     </div>
     <div>
      <h1 className="text-gray-100 text-xl">Reviews ({data})</h1>
     </div>
      </div>
  
    </div>

  )
}