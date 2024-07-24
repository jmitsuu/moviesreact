export interface Review {
  backdrop_path?: string
  title: string
  totalVotes: number
  totalTitles: number
  movieId?: string
}

export interface ArrayReview {
  title: string
  vote: number
}

export interface Accumulator {
  [title: string]: {
    title: string
    vote: number
    totalVotes: number
    totalTitles: number
  }
}