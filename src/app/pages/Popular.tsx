import { FetchMovies } from '@/api/movies/FetchMovies'
import { Title } from '@/components/Title'
import { CardMovie } from '@/components/movie/CardMovie'
import { SkeletonMovie } from '@/components/movie/SkeletonMovie'
import { LayoutCards } from '@/layout/LayoutCards'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
export function Popular() {
  const { movies, isLoading, page, refetch, setPage } = FetchMovies()
  const [data, setData] = useState<any>([])
  useEffect(() => {
    if (!movies) return
    setTimeout(() => {
      setData(movies.results)
    }, 350)
  }, [movies])
  if (isLoading) {
    return (isLoading &&
      <div className="flex flex-wrap gap-10">
        <SkeletonMovie />
      </div>
    )
  }

  if (!data) return
  const fetchMoreData = () => {
  
    refetch()
    setPage(page + 1)
    setData((state: TypeMovie[]) => state.concat(movies.results))
  }

  return (
    <div>
      <Title
        title="Filmes"
        description="Encontre os titulos que estão em destaque"
      />

      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={true}

        loader={
          <div className="flex flex-wrap gap-10">
            <SkeletonMovie />
          </div>
        }
      >
        <LayoutCards>
          {data?.map((film: TypeMovie) => {
            return (
              <CardMovie
                key={film.id}
                poster_path={film.poster_path}
                title={film.title}
                release_date={film.release_date}
                vote_average={film.vote_average}
                genre_ids={film.genre_ids}
                id={film.id}
              />
            )
          })}
        </LayoutCards>
      </InfiniteScroll>
    </div>
  )
}
