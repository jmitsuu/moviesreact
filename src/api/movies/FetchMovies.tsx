import { instance } from "@/http/UrlRequest";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function FetchMovies() {
 const [page, setPage] = useState(1);

 const {
  data: movies,
  isLoading,
  refetch,
  isError,
 } = useQuery({
  queryKey: ["movies"],
  queryFn: async () => {
   const { data } = await instance.get(`/movie/popular?language=pt-BR`, {
    params: {
     page: page,
    },
   });
   return data;
  },
 });

 return { movies, isLoading, isError, page, setPage, refetch };
}
