
import { generes } from "@/helpers/Generes";

export function useGetDetails(param:any) {
 
if(!param) return;
 const lists = param.results.map((item: any) => {
  const getGeneres = generes.filter((ids) => {
   if (item.genre_ids.includes(ids.id)) {
    return ids.name
   };
  });

  return {
    ...item,
    genre_ids:getGeneres
  }
 
 });

 return {lists}

}
