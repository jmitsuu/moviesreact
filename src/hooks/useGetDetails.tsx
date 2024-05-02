import { generes } from "@/helpers/Generes";
export function useGetDetails(list: any) {

 const lists = list.results.map((item: any) => {
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
 return {lists};
}
