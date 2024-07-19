import { FetchAll } from '@/api/reviews/FetchAll'
import { CardReview } from '@/components/review/CardReview'
import { ListReview } from '@/components/review/ListReview'
import { Spinner } from '@/components/Spinner'
import { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

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
  const [isHovered, setIsHovered] = useState(false)
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
  const newArrayFiltered: Review[] = filteredReviews
  const arrayObjects = Object.values(newArrayFiltered)
    .slice(0, 10)
    .sort((a, b) => {
      return b.totalVotes - a.totalVotes
    })

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
          <div className="flex flex-col items-center mt-10">
            <h1 className="xl:text-9xl uppercase md:text-4xl text-3xl font-bold text-slate-100">
              Top Reviews
            </h1>
            <h2 className="xl:text-3xl md:text-2xl text-xl text-slate-300">
              O top 10 dos filmes mais comentados.
            </h2>
          </div>
          <div className="flex flex-row-reverse w-96 h-96 justify-center ml-64 transition-all mt-10  ">
            {arrayObjects.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`mx-auto w-[900px] last:blur-0   ${!isHovered ? 'blur-sm hover:z-50 ' : 'hover:blur-0 hover:z-50 last:blur-sm '}`}
                  onMouseEnter={() => {
                    setIsHovered(true)
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false)
                  }}
                >
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
          <div className="xl:w-[900px] mx-auto  border border-purple-700/20 p-2 rounded-md bg-gradient-to-tr from-purple-950 via-black to-blue-950  ">
            {arrayObjects.map((item, index) => {
              return (
                <ListReview
                  key={index}
                  listTop={index + 1}
                  title={item.title}
                  vote={item.totalVotes}
                  data={item.totalTitles}
                  id={Number(item.movieId)}
                />
              )
            })}
          </div>
        </div>
      </section>
    </HelmetProvider>
  )
}
