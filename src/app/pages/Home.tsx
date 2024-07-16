import { FetchAll } from '@/api/reviews/FetchAll'
import { CardReview } from '@/components/review/CardReview'
import { ListReview } from '@/components/review/ListReview'
import { Spinner } from '@/components/Spinner'
interface Review {
  backdrop_path?: string
  title: string
  totalVotes: number
  totalTitles: number
  movieId?: string
}

interface ArrayReview {
  title: string
  vote: number
}

interface Accumulator {
  [title: string]: {
    title: string
    vote: number
    totalVotes: number
    totalTitles: number
  }
}
export function Home() {
  const { reviews, isLoading } = FetchAll()

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center mt-40">
        <Spinner />
      </div>
    )
  }

  const groupArray = reviews.dados
  const filteredReviews = groupArray.reduce(
    (acc: Accumulator, val: ArrayReview) => {
      const title = val.title
      if (!acc[title]) {
        acc[title] = {
          ...val,
          totalVotes: val.vote,
          totalTitles: 1,
        }
      } else {
        acc[title].totalVotes += val.vote
        acc[title].totalTitles += 1
      }
      return acc
    },
    {},
  )
  const newArrayFiltered: Review[] = Object.values(
    filteredReviews,
  ).slice(0, 10)
  console.log(filteredReviews)
  return (
    <section className="w-screen">
      <div className="h-full w-full container flex flex-col justify-center mx-auto rounded-xl ">
        <div className="flex flex-col items-center mt-10">
          <h1 className="xl:text-9xl uppercase md:text-4xl text-3xl font-bold text-slate-100">
            Top Reviews
          </h1>
          <h2 className="xl:text-3xl md:text-2xl text-xl text-slate-300">
            O top 10 dos filmes mais comentados.
          </h2>
        </div>
        <div className="flex flex-row-reverse w-96 h-96 justify-center ml-64 transition-all mt-10  backdrop-blur-md">
          {newArrayFiltered.map((item, index) => {
            return (
              <div key={index} className="mx-auto w-[900px]  ">
                <CardReview
                  backdrop_path={item.backdrop_path}
                  totalVotes={
                    item.totalVotes / Number(item.totalTitles)
                  }
                  title={item.title}
                />
              </div>
            )
          })}
        </div>
        <div className="xl:w-[900px] mx-auto  border border-purple-700/20 p-2 rounded-md bg-gradient-to-tr from-purple-950 via-black to-blue-950 ">
          {newArrayFiltered.map((item, index) => {
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
