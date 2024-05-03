import { review } from "@/http/instance";
import { useQuery } from "@tanstack/react-query";

export function FetchReview(paramId:number) {

 const {
  data: response,
  isLoading,
  isError,
 } = useQuery({
  queryKey: ["reviews"],
  queryFn: async () => {
   const { data } = await review.get(
    `/id/${paramId}`
   );
 return data

  }
 });

 return { response, isLoading, isError,  };
}
