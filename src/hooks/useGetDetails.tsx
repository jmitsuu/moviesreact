import { generes } from "@/helpers/Generes";
import { instance } from "@/http/instance";
import { useEffect, useState } from "react";
export async function useGetDetails(param:string) {
 
async function getmovie(){

}
const {data} = await instance.get(`/search/movie?query=${param}`);
const newData = data.results.filter((item:any) => item.backdrop_path !== null);
console.log(newData[0])

getmovie()
 const lists = newData[0].map((item: any) => {
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
