
import { instance } from "@/http/UrlRequest";
import { useQuery } from "@tanstack/react-query";

export function FindMovie(movieId:string) {


 const {
  data: search,
  isLoading,
  refetch,
  isError,
 } = useQuery({
  queryKey: ["search", movieId],
  queryFn: async () => {
   const { data } = await instance.get(
    `/movie/${movieId}`
   );
   return data;
  },
 });



 return { search, isLoading, isError, refetch };
}
