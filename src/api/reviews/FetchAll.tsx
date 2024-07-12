import { review } from '@/http/UrlRequest'
import { useQuery } from '@tanstack/react-query'

export function FetchAll() {
  const {
    data: reviews,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['Allreviews'],
    queryFn: async () => {
      const { data } = await review.get(`/movies`)
      return data
    },
  })

  return { reviews, isLoading, isError, refetch }
}
