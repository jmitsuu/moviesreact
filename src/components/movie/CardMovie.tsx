
import { TypeMovie } from '@/interfaces/TypeMovie'
import { Link } from 'react-router-dom'

const urlImage = 'https://image.tmdb.org/t/p/w500'

export function CardMovie({
  poster_path,
  release_date,
  title,

  id,
}: TypeMovie) {
  return (
    <>
      <div className="w-44  min-h-72 relative flex flex-col  hover:scale-105  scale-100 transition duration-500 ">
        <Link to={`/pagereview/${id}`}>
          <img
            src={urlImage + poster_path}
            className="w-full h-72 rounded-md  cursor-pointer "
            alt="poster"
          />
        </Link>
        {/* <div className=" text-xs p-2  rounded-full bg-sky-300 text-black font-bold absolute top-2 right-2 flex items-center justify-center">
          {vote_average?.toFixed(1)}
        </div> */}
        <div className="flex flex-col justify-between ">
          <div className="text-gray-200 text-xs mt-1">
            <h2>{release_date?.substring(0, 4)}</h2>
          </div>
          <h1 className="text-gray-200 font-bold text-md mt-2 ">
            {title}
          </h1>
        </div>
      </div>
    </>
  )
}
