import { instance } from '@/http/UrlRequest'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export function FetchPlayingNow() {
  const [page, setPage] = useState(1)
  const {
    data: movies,
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ['playing'],
    queryFn: async () => {
      const { data } = await instance.get(`/movie/now_playing`, {
        params: {
          page: page,
        },
      })
      return data
    },
  })

  return { movies, isLoading, isError, page, setPage, refetch }
}
