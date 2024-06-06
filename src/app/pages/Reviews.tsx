import { FetchAll } from '@/api/reviews/FetchAll'
import { Spinner } from '@/components/Spinner'
import { CardReview } from '@/components/review/CardReview'
import { useGroupByTitle } from '@/hooks/review/useGroupByTItle'

export function Reviews() {
  const { reviews, isLoading } = FetchAll()

  if (isLoading) {
    return <div>
      <Spinner />
    </div>
  }

  const groupArray = Object.values(useGroupByTitle(reviews.dados))
  const onHundred = groupArray.slice(0, 100)

  return (
    <div className=" mt-10   container  gap-3  xl:ml-16 ">
      <h1 className="text-8xl text-center text-gray-200  mb-20  uppercase font-bold">
        Top #100 Reviews
      </h1>

      <div className="  ">
        {onHundred.map((item: any, index) => {
          return (
            <CardReview
              key={index}
              listTop={index + 1}
              backdrop={item.backdrop_path}
              title={item.title}
              vote={item.totalVotes}
              data={item.totalTitles}
              id={item.title}
            />
          )
        })}
      </div>
    </div>
  )
}
