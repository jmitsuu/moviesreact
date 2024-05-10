import { FetchAll } from "@/api/reviews/FetchAll";
import { CardReview } from "@/components/review/CardReview";
import { useGroupByTitle } from "@/hooks/review/useGroupByTItle";


export function Reviews() {
  const {reviews, isLoading} = FetchAll();
  


  if(isLoading){
    return <div>Loading....</div>
  }

const groupArray = Object.values(useGroupByTitle(reviews.dados));

 return <div className="w-screen h-screen gap-3 container">
   <h1 className="text-4xl text-center mb-10  uppercase">Bem avaliados</h1>

{groupArray.map((item:any, index)=>{
  return(
    <CardReview
    key={index}
    listTop={index+1}
    backdrop={item.backdrop_path}
    title={item.title}
    vote={item.totalVotes}
    data={item.totalTitles}
    />
  )
})

}
 </div>;
}
