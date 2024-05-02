import { FetchMovies } from "@/api/movies/FetchMovies";
import { useGetDetails } from "@/hooks/useGetDetails";
import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { FetchReview } from "@/api/reviews/FetchReview";
import { ProfileReview } from "@/components/review/ProfileReview";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// import { BarProgressAvaliation } from "@/components/BarProgressAvaliation";
import { useForm, SubmitHandler } from "react-hook-form"



const urlImage = "https://image.tmdb.org/t/p/w500";
type Inputs = {
  example: string
  exampleRequired: string
}
export function PageReview() {
 const { id } = useParams();
 const { movies, isLoading } = FetchMovies();
 const { response } = FetchReview(Number(id));
 const [ctrlComments, setCtrlComents ] = useState(false);

 const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm<Inputs>()
const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


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
       {dados.includes("Não existem dados para retornar") ? (
        <h2> ((0) reviews)</h2>
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
     
     {/* {dados.map((el:any)=>{
      return(
        <BarProgressAvaliation total={el}/>
      )
     })

     } */}
    </div>
   </div>
   <div className=" min-h-80  mt-20 bg-white p-10  rounded-md  transition duration-500">
   <div className=" ">
 
    <div className="float-right " >
    <Button onClick={()=>{setCtrlComents(true)}} className={`${ctrlComments ?'hidden' : ''}`}>Novo comentario</Button>
    <Button onClick={()=>{setCtrlComents(false)}} className={`${!ctrlComments ?'hidden' : ''}`}>Ver comentarios</Button>
    </div>
    <h1 className={`text-gray-700 uppercase text-4xl ${ctrlComments ?'hidden' : ''}`}>Analises</h1>
   </div>

  

    <div className={`w-full h-80 overflow-y-auto flex flex-col border p-2 rounded-md mt-20 ${ctrlComments ?'hidden' : ''}`}>
     {dados.includes("Não existem dados para retornar") ? (
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
    <div className={`w-full flex flex-col justify-center items-center ${!ctrlComments ? ' hidden': ''}`}>
    <h1 className="">NOVO COMENTARIO</h1>
      <div className=" mt-10 text-center  ">
      
       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-80 gap-4 ">
      {/* register your input into the hook by invoking the "register" function */}
      {/* <Input {...register("example")} /> */}
  
      <RadioGroup {...register("example")}   className="flex " >
       
 voto
   
    <div className="flex items-center space-x-2">
      <RadioGroupItem {...register("example")} value="1" />
      <h3>1</h3>
      <RadioGroupItem {...register("example")} value="2"  />
    <h3>2</h3>
    <RadioGroupItem {...register("example")} value="3" />
    <h3>3</h3>
    <RadioGroupItem {...register("example")} value="4" />
    <h3>4</h3>
    <RadioGroupItem {...register("example")} value="5" />
    <h3>5</h3>
    
    </div>
   
 
 
  </RadioGroup>
   
      <Textarea {...register("exampleRequired", { required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}


      <Button>Enviar</Button>
    </form>
      </div>
    
    </div>
   </div>
  </div>
 );
}
