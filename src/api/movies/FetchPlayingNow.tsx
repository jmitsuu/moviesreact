import { instance } from "@/http/instance";
import { useQuery } from "@tanstack/react-query";

export function FetchPlayingNow() {
 let page = 1;
 const {
  data: movies,
  isLoading,
  refetch,
  isError,
 } = useQuery({
  queryKey: ["playing"],
  queryFn: async () => {
   const { data } = await instance.get(
    `/movie/now_playing?language=pt-BR&page=${page}`
   );
   return data;
  },
 });

 return { movies, isLoading, isError, page, refetch };
}