import { FetchAll } from '@/api/reviews/FetchAll'
import {
  Accumulator,
  ArrayReview,
  Review,
} from '@/interfaces/TypeReview'

export function useListReview() {
  const { reviews, isLoading } = FetchAll()

  if (isLoading) {
    return { arrayObjects: [] }
  }

  const filteredReviews = reviews.dados.reduce(
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
    {} as Accumulator,
  )
  const reviewsInfo: Review[] = filteredReviews
  const sortedReviews = Object.values(reviewsInfo)
    .sort((a, b) => b.totalVotes - a.totalVotes)
    .slice(0, 10)
    .reverse()

  return { sortedReviews }
}
