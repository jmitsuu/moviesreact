import { FetchPlayingNow } from "@/api/movies/FetchPlayingNow";
import { Title } from "@/components/Title";
import { CardMovie } from "@/components/movie/CardMovie";
import { LayoutCards } from "@/layout/LayoutCards";
export function PlayingNow() {
 const { movies, isLoading } = FetchPlayingNow();

 if (isLoading) {
  return <div>carregando...</div>;
 }

 return (
  <div>
   <Title
    title="Em Alta"
    description="Encontre os titulos que estão em alta pela comunidade"
   />
   <LayoutCards>
    {movies.results.map((film: TypeMovie) => {
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
  </div>
 );
}
