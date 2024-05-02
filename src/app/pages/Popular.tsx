import { FetchMovies } from "@/api/movies/FetchMovies";
import { Title } from "@/components/Title";
import { CardMovie } from "@/components/movie/CardMovie";
import { LayoutCards } from "@/layout/LayoutCards";
export function Popular() {
 const { movies, isLoading } = FetchMovies();

 if (isLoading) {
  return <div>carregando...</div>;
 }

 return (
  <div>
   <Title
    title="Filmes"
    description="Encontre os titulos que estão em destaque"
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
       id={film.id}
      />
     );
    })}
   </LayoutCards>
  </div>
 );
}
