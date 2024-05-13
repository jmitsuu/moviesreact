import { FetchMovies } from "@/api/movies/FetchMovies";
import { Title } from "@/components/Title";
import { CardMovie } from "@/components/movie/CardMovie";
import { LayoutCards } from "@/layout/LayoutCards";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
export function Popular() {
 const { movies, isLoading, page, refetch, setPage } = FetchMovies();
 const [data, setData] = useState<any>([]);
 const [control, setControl] = useState(false);
 if (isLoading) {
  return <div>carregando...</div>;
 }

 useEffect(() => {
  setData(movies.results);
 }, [control]);

 if (data.length === 0) return;
 const fetchMoreData = () => {
  //  nextPage()
  setPage(page + 1);

  setTimeout(() => {
    refetch();
   setData((state: any) => state.concat(movies.results));

  }, 1500);
 };

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
