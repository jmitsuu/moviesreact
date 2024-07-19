import { FetchMovies } from '@/api/movies/FetchMovies'
import { Title } from '@/components/Title'
import { CardMovie } from '@/components/movie/CardMovie'
import { SkeletonMovie } from '@/components/movie/SkeletonMovie'
import { TypeMovie } from '@/interfaces/TypeMovie'
import { LayoutCards } from '@/layout/LayoutCards'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
export function Popular() {
  const { movies, isLoading, page, refetch, setPage } = FetchMovies()
  const [data, setData] = useState<TypeMovie[]>([])
  useEffect(() => {
    if (!movies) return
    setTimeout(() => {}, 150)
    setData(movies.results)
  }, [movies])
  if (!data) return
  const fetchMoreData = () => {
    refetch()
    setPage(page + 1)
    setData((state) => state.concat(movies.results))
  }

  return (
    <div className="px-10 mt-10">
      <Title
        title="Filmes"
        description="Encontre os titulos que estão em destaque"
      />

      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={true}
        loader={
          isLoading && (
            <div className="flex flex-wrap gap-10">
              <SkeletonMovie />
            </div>
          )
        }
      >
        <LayoutCards
          title="Filmes"
          description="encontre os titulos que estão em destaque"
        >
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
