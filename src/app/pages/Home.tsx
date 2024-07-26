import { ListReview } from '@/components/review/ListReview'
// import YouTubeVideo from '@/components/YouTubeVideo'
import { useListReview } from '@/hooks/review/useListReview'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export function Home() {
  const { sortedReviews } = useListReview()
  console.log(sortedReviews)
  // const videoUrl = 'watch?v=9YjkBgbAku0'
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="top Reviews"
          content="Top 10 dos mais avaliados"
        />
      </Helmet>
      <section className="w-screen py-10">
        <div className="h-full w-full container flex flex-col justify-center mx-auto rounded-xl ">
          <div className="flex flex-col items-center">
            <h1 className="xl:text-6xl uppercase md:text-3xl text-3xl font-bold text-slate-100">
              Top Reviews
            </h1>
            <h2 className="xl:text-2xl md:text-xl mt-5 text-slate-300">
              O top 10 dos filmes mais comentados.
            </h2>
          </div>
          <div>
          {/* <YouTubeVideo videoId={videoUrl} /> */}
          </div>

          <div className="mx-auto flex flex-wrap gap-x-3 w-full mt-20 ">
            {sortedReviews?.map((review, index) => {
              return (
                <ListReview
                  key={index}
                  title={review.title}
                  vote={review.totalVotes}
                  data={review.totalTitles}
                  id={Number(review.movieId)}
                  poster_path={review.poster_path}
                />
              )
            })}
          </div>
        </div>
      </section>
    </HelmetProvider>
  )
}
