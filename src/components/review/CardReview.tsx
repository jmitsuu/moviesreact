import { useEffect, useState } from "react"

interface Review {
  backdrop_path?: string
  title?: string
  totalVotes?: number
  movieId?: string,
  index?:number,
  cn?:string
}

export function CardReview({ backdrop_path, index, cn }: Review) {
  const [isSelect, setSelect] = useState("top-0")
  const urlImage = 'https://image.tmdb.org/t/p/original'
  const url = urlImage + backdrop_path

  return (
    <div className={`absolute  hover:border-blue-500  transition-all  m-auto `}>
      <div className="relative  flex w-[500px] h-96">
        <img src={url} alt="" className={` absolute hover:top-20  `} />
       
        </div>
    </div>
  )
}
