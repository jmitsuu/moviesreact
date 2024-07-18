import { useState } from 'react'

interface Review {
  backdrop_path?: string
  title?: string
  totalVotes?: number
  movieId?: string
  index?: number
  cn?: string
}

export function CardReview({
  backdrop_path,
  title,
  totalVotes,
}: Review) {
  const [isHovered, setIsHovered] = useState(false)
  const urlImage = 'https://image.tmdb.org/t/p/original'
  const url = urlImage + backdrop_path
  if (url.includes('null')) return
  console.log(url)

  return (
    <button
      className={` absolute box-content transition-all m-auto `}
    >
      <div
        className={`relative  flex w-[500px]`}
        onMouseEnter={() => {
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
      >
        {url && (
          <div
            className={`absolute transition duration-500  ${isHovered ? 'hover:scale-110 hover:z-50' : ''}  `}
          >
            <div
              className={`absolute top-0 flex justify-center flex-col group-hover:z-50 h-full w-44 text-center bg-black/90 p-2`}
            >
              <h1 className=" text-white  rounded-br-md text-xl">
                {title}
              </h1>
              <h2 className="text-4xl text-white leading-snug">
                {totalVotes?.toFixed(1)}
              </h2>
            </div>
            <img
              src={url}
              alt={title || 'Movie Backdrop'}
              className={`  h-full w-full   `}
            />
          </div>
        )}
      </div>
    </button>
  )
}
