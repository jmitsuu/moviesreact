
import { instance } from "@/http/instance";
import { useQuery } from "@tanstack/react-query";

export function FetchMovies() {

 let page = 1;
 const {
  data: movies,
  isLoading,
  refetch,
  isError,
 } = useQuery({
  queryKey: ["movies"],
  queryFn: async () => {
   const { data } = await instance.get(
    `/movie/popular?language=pt-BR&page=${page}`
   );
   return data;
  },
 });



 return { movies, isLoading, isError, page, refetch };
}
