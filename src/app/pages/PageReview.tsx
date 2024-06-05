import { useGetDetails } from "@/hooks/useGetDetails";
import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { FetchReview } from "@/api/reviews/FetchReview";
import { ProfileReview } from "@/components/review/ProfileReview";
import { ModalComments } from "@/components/review/ModalComments";
import { BarProgressAvaliation } from "@/components/review/BarProgressAvaliation";
import { FindMovie } from "@/api/movies/FindMovie";
import { utilFilterVotes } from "@/utils/utilFilterVotes";
import { utilRemoveSpace } from "@/utils/utilRemoveSpace";

const urlImage = "https://image.tmdb.org/t/p/original";

export function PageReview() {
 const { id } = useParams();
 console.log(id)

 const { search, isLoading } = FindMovie(`${id}`);

 const { response, refetch } = FetchReview(`${id}`);

 if (isLoading) {
  return <div className="text-2xl animate-pulse"> carregando...</div>;
 }

 const { lists }: any = useGetDetails(search);
 const findItem = lists.find(
  (item: { title: string }) => utilRemoveSpace(item.title) === id
 );

 if (isLoading || !response) {
  return <div>carregando</div>;
 }

 const { dados } = response;
 const url = JSON.stringify(urlImage + findItem.backdrop_path);
 return (
  <main className="w-screen container xl:ml-16">


  <div className="h-full   bg-[#ddd8e1] rounded-md p-5 ">
   <div
    style={{ backgroundImage: `url(${url})` }}
    className={` w-full flex  justify-between bg-black bg-cover p-10 rounded-md"
     `}
   >
    <div className="w-[600px]   p-4 bg-black/50 rounded-md text-white">
     <h1 className="font-bold text-4xl mb-10">{findItem.title}</h1>
     <div className="flex  gap-6">
      <img
       src={urlImage + findItem.poster_path}
       className="h-72  rounded-md "
      />
      <p className=" text-[0.9rem]">{findItem.overview}</p>
     </div>
     <div>
      <div className="flex gap-4 text-xs font-bold mt-4 ">
       <h1 className="flex items-center">
        {(utilFilterVotes(dados) / dados.length).toFixed(1)} -{" "}
        <IoStar className="text-yellow-500" />
       </h1>{" "}
       {dados.includes("Não existem dados para retornar") ? (
        <h2> ((0) reviews)</h2>
       ) : (
        <h2> ( ({dados.length}) reviews )</h2>
       )}
      </div>
      <div className="flex gap-2 mt-5">
       {findItem.genre_ids.map((el: { name: string }) => {
        return (
         <h3 key={el.name} className=" font-semibold ">
          {el.name}
         </h3>
        );
       })}
      </div>
     </div>
    </div>

    <div className="bg-black/50 rounded-md text-white justify-center px-10  gap-10 p-8 flex flex-col">
     <h1>Avaliações</h1>
     <BarProgressAvaliation total={dados || "sem avaliações"} />
    </div>
   </div>

   <div className=" min-h-80 mt-20 bg-white p-10  rounded-md   transition duration-500">
    <div className=" w-full ">
     <h1 className={`text-gray-700 uppercase text-4xl `}>Analises</h1>
     <div className="float-right">
      <ModalComments
       formatted_title={`${id}`}
       id={findItem.id}
       title={findItem.title}
       poster_path={findItem.poster_path}
       backdrop_path={findItem.backdrop_path}
       refetch={refetch}
      />
     </div>
    </div>
    <div className={`w-full   flex flex-col border-b pb-4 p-2   mt-20`}></div>
    <div
     className={`w-full overflow-y-auto    flex flex-col border p-2 rounded-md mt-20 `}
    >
     {dados.includes("Não existem dados para retornar") ? (
      <div className="w-full mt-10 text-center  p-20">
       <h1 className="">Não há comentarios até o momento</h1>
    
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
  </main>
 );
}
