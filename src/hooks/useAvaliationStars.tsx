import { IoStar } from "react-icons/io5";
 
export function useAvaliationStars(qtdVotes:number) {
  const stars = []

  for(let i = 0; i < qtdVotes; i++){
    stars.push(<IoStar key={i}/>)
  }
  return stars
}