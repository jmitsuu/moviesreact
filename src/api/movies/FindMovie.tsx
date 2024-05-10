
import { instance } from "@/http/UrlRequest";
import { useQuery } from "@tanstack/react-query";

export function FindMovie(titleParam:string) {


 const {
  data: search,
  isLoading,
  refetch,
  isError,
 } = useQuery({
  queryKey: ["search", titleParam],
  queryFn: async () => {
   const { data } = await instance.get(
    `/search/movie?query=${titleParam}&language=pt-BR`
   );
   return data;
  },
 });



 return { search, isLoading, isError, refetch };
}
