import { review } from '@/http/UrlRequest'
import { useQuery } from '@tanstack/react-query'

export function FetchReview(findId: string) {
  const {
    data: response,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const { data } = await review.get(`/id/${findId}`)
      return data
    },
  })

  return { response, isLoading, isError, refetch }
}
