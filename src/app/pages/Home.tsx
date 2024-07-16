import { FetchAll } from '@/api/reviews/FetchAll'
import { CardReview } from '@/components/review/CardReview'
import { ListReview } from '@/components/review/ListReview'
import { Spinner } from '@/components/Spinner'
import { useGroupByTitle } from '@/hooks/review/useGroupByTItle'
interface Review {
  backdrop_path: string
  title: string
  totalVotes: number
  totalTitles: string
  movieId: string
}
export function Home() {
  const { reviews, isLoading } = FetchAll()

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }
  const groupArray: Review[] = Object.values(
    useGroupByTitle(reviews.dados),
  )
  const filteredReviews = groupArray.slice(0, 10)

  return (
    <section className=" w-screen   ">
      <div className="h-full w-full container flex flex-col justify-center mx-auto rounded-xl ">
        <div className="flex flex-col items-center space-y-10 mt-10">
          <h1 className="xl:text-9xl uppercase md:text-4xl text-3xl font-bold text-slate-100">
            Top Reviews
          </h1>
          <h2 className="xl:text-3xl md:text-2xl text-xl text-slate-300">
            O top 10 dos filmes mais comentados.
          </h2>
        </div>
        <div className="flex flex-row-reverse w-96 h-96 justify-center ml-64 transition-all mt-10">
          {filteredReviews.map((item, index) => {
            return (
              <div key={index} className='mx-auto w-[900px] '>
                <CardReview backdrop_path={item.backdrop_path} index={index + 1}/>
              </div>
            )
          })}
        </div>
        <div className="xl:w-[900px] mx-auto  border border-purple-700/20 p-2 m-5 rounded-md bg-gradient-to-tr from-purple-950 via-black to-blue-950 ">
          {filteredReviews.map((item, index) => {
            return (
              <ListReview
                key={index}
                listTop={index + 1}
                backdrop={item.backdrop_path}
                title={item.title}
                vote={item.totalVotes}
                data={item.totalTitles}
                id={item.movieId}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
