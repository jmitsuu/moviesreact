import { utilRemoveSpace } from '@/utils/utilRemoveSpace'
import { utilStars } from '@/utils/utilStars'
import { Link } from 'react-router-dom'

interface typeCardReview {
  title: string
  vote: number
  data: any
  listTop: number
  backdrop: string
  id: string
}
export function CardReview({
  title,
  vote,
  data,
  listTop,
  backdrop,
  id,
}: typeCardReview) {
  const urlImage = 'https://image.tmdb.org/t/p/w500'
  const url = urlImage + backdrop
  return (
    <Link to={`/pagereview/${utilRemoveSpace(`${id}`)}`}>
      <div
        style={{ backgroundImage: `url(${url}) ` }}
        className="flex cursor-pointer  bg-cover hover:shadow-gray-600 shadow-md transition duration-500 h-20 mb-1 bg-black rounded-md "
      >
        <div className="w-screen h-full bg-black/50 flex items-center justify-between px-10 rounded-md">
          <h1 className="text-gray-50 text-4xl m-1">#{listTop}</h1>
          <div className="w-72">
            <h1 className="text-gray-100 font-bold">{title}</h1>
            <div className="flex items-center gap-1 text-yellow-400 ">
              <h2 className="text-yellow-400 font-bold">
                {(vote / data).toFixed(1)}
              </h2>
              {utilStars(vote / data)}
            </div>
          </div>
          <div>
            <h1 className="text-gray-100 text-xl">Reviews ({data})</h1>
          </div>
        </div>
      </div>
    </Link>
  )
}
