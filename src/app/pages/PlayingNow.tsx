import { FetchPlayingNow } from '@/api/movies/FetchPlayingNow'
import { Title } from '@/components/Title'
import { CardMovie } from '@/components/movie/CardMovie'
import { SkeletonMovie } from '@/components/movie/SkeletonMovie'
import { TypeMovie } from '@/interfaces/TypeMovie'
import { LayoutCards } from '@/layout/LayoutCards'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
export function PlayingNow() {
  const { movies, isLoading, page, refetch, setPage } =
    FetchPlayingNow()
  const [data, setData] = useState<TypeMovie[]>([])
  useEffect(() => {
    if (!movies) return
    setTimeout(() => {
      setData(movies.results)
    }, 350)
  }, [movies])
  // if (isLoading) {
  //   return (
  //     <div className="flex flex-wrap gap-10">
  //       <SkeletonMovie />
  //     </div>
  //   )
  // }
  if (!data) return
  const fetchMoreData = () => {
    setTimeout(() => {
      refetch()
    }, 1500)
    setPage(page + 1)
    setData((state) => state.concat(movies.results))
  }

  return (
    <div className="px-10 mt-10 ">
      <Title
        title="Em Alta"
        description="Encontre os titulos que estão em alta pela comunidade"
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
          title="Em Alta"
          description="Encontre os titulos que estão em alta pela comunidade"
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
