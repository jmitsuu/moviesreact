import { FetchMovies } from "@/api/movies/FetchMovies";
import { useGetDetails } from "@/hooks/useGetDetails";
import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { useAvaliationStars } from "@/hooks/useAvaliationStars";
import { Progress } from "@/components/ui/progress";
import { FetchReview } from "@/api/reviews/FetchReview";
import { ProfileReview } from "@/components/review/ProfileReview";
const urlImage = "https://image.tmdb.org/t/p/w500";
export function PageReview() {
 const { id } = useParams();
 const { movies, isLoading } = FetchMovies();
 const { response } = FetchReview(Number(id));
 if (isLoading) {
  return <div>carregando...</div>;
 }

 const { lists } = useGetDetails(movies);
 const findItem = lists.find((item: TypeMovie) => item.id === Number(id));
 if (!response) return;
 const { dados } = response;
 return (
  <div className="w-screen container  min-h-full bg-[#ddd8e1] rounded-md p-5">
   <div className={` w-full flex  justify-between bg-white p-10 rounded-md`}>
    <div className="w-[600px]   p-4">
     <h1 className="text-gray-700 font-bold text-4xl mb-10">
      {findItem.title}
     </h1>
     <div className="flex  gap-6">
      <img
       src={urlImage + findItem.poster_path}
       className="h-64 w-52 rounded-md "
      />
      <p className="text-gray-700 text-[0.9rem]">{findItem.overview}</p>
     </div>
     <div>
      <div className="flex gap-4 text-xs font-bold mt-4 text-gray-600">
       <h1 className="flex items-center">
        nota - <IoStar className="text-yellow-500" />
       </h1>{" "}
       {dados.length === 0 ? (
        <h2> (() reviews)</h2>
       ) : (
        <h2> ( ({dados.length}) reviews )</h2>
       )}
      </div>
      <div className="flex gap-2 mt-5">
       {findItem.genre_ids.map((el: { name: string }) => {
        return (
         <h3 key={el.name} className="text-slate-600 font-semibold ">
          {el.name}
         </h3>
        );
       })}
      </div>
     </div>
    </div>
    <div className="text-black min-w-96 gap-10 p-8 flex flex-col">
     {/* criar um componente, quando receber dados reais da api */}
     <div className="flex items-center gap-2">
      {" "}
      <span className="text-yellow-500 flex  ">
       {useAvaliationStars(5)}
      </span>{" "}
      <Progress value={100} className="h-2  bg-green-400" />{" "}
      <h1 className="text-center text-xs">(0) reviews</h1>
     </div>
     <div className="flex items-center  gap-2">
      {" "}
      <span className="text-yellow-500 flex">{useAvaliationStars(4)}</span>{" "}
      <Progress value={80} className="h-2 " />{" "}
      <h1 className="text-center text-xs">(0) reviews</h1>
     </div>
     <div className="flex items-center  gap-2">
      {" "}
      <span className="text-yellow-500 flex">{useAvaliationStars(3)}</span>{" "}
      <Progress value={50} className="h-2" />{" "}
      <h1 className="text-center text-xs">(0) reviews</h1>
     </div>
     <div className="flex items-center  gap-2">
      {" "}
      <span className="text-yellow-500 flex">{useAvaliationStars(2)}</span>{" "}
      <Progress value={30} className="h-2" />{" "}
      <h1 className="text-center text-xs">(0) reviews</h1>
     </div>
     <div className="flex items-center  gap-2">
      {" "}
      <span className="text-yellow-500 flex">{useAvaliationStars(1)}</span>{" "}
      <Progress value={10} className="h-2" />{" "}
      <h1 className="text-center text-xs">(0) reviews</h1>
     </div>
    </div>
   </div>
   <div className=" min-h-80 mt-20 bg-white p-10  rounded-md ">
    <h1 className="text-gray-700 uppercase text-4xl">Analises</h1>

    {/* <div className="w-full mt-10 text-center">
     <h1 className="">Não há comentarios até o momento</h1>
     <p className="cursor-pointer">clique aqui e seja o primeiro :)</p>
    </div> */}
    <div className="w-full flex flex-col ">
     {dados.length === 0 ? (
      <div className="w-full mt-10 text-center">
       <h1 className="">Não há comentarios até o momento</h1>
       <p className="cursor-pointer">clique aqui e seja o primeiro :)</p>
      </div>
     ) : (
      <>
       {dados.map((profile: any) => {
        return (
         <ProfileReview
          key={profile.createdAt}
          vote={profile.vote}
          comment={profile.description}
          date={profile.createdAt}
         />
        );
       })}
      </>
     )}
    </div>
   </div>
  </div>
 );
}