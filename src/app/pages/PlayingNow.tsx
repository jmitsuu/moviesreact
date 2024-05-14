import { FetchPlayingNow } from "@/api/movies/FetchPlayingNow";
import { Title } from "@/components/Title";
import { CardMovie } from "@/components/movie/CardMovie";
import { LayoutCards } from "@/layout/LayoutCards";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
export function PlayingNow() {
 const { movies, isLoading, page, refetch, setPage } = FetchPlayingNow();
 const [data, setData] = useState<any>([]);
 useEffect(() => {
  if(!movies) return;
  setTimeout(()=>{
    setData(movies.results);
  },150)
   
   },[movies]);
 if (isLoading) {
  return <div>carregando...</div>;
 }
 if (!data) return;
 const fetchMoreData = () => {

  setTimeout(() => {
    refetch()
  }, 1500);
  setPage(page + 1);
  setData((state: TypeMovie[]) => state.concat(movies.results));

 };

console.log("movies")
 return (
  <div>
   <Title
    title="Em Alta"
    description="Encontre os titulos que estão em alta pela comunidade"
   />

<InfiniteScroll
    dataLength={data.length}
    next={fetchMoreData}
    hasMore={true}
    loader={<h4>Loading...</h4>}
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
        id={film.title}
       />
      );
     })}
    </LayoutCards>
   </InfiniteScroll>
  </div>
 );
}
