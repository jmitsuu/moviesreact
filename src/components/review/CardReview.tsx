interface Review {
  backdrop_path?: string
  title?: string
  totalVotes?: number
  movieId?: string
}

export function CardReview({ backdrop_path }: Review) {
  const urlImage = 'https://image.tmdb.org/t/p/original'
  const url = urlImage + backdrop_path
  return (
    <div className="absolute hover:border hover:border-blue-500 hover:z-50">
      <div className=" flex  w-[700px]">
        <img src={url} alt="" className="  " />
      </div>
    </div>
  )
}
