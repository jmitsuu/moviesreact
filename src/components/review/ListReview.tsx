import { Link } from 'react-router-dom'

interface typeCardReview {
  title: string
  vote: number
  data: number
  listTop: number
  backdrop?: string
  id: number
}
export function ListReview({
  title,
  vote,
  data,
  listTop,
  id,
}: typeCardReview) {
  return (
    <Link to={`/pagereview/${id}`}>
      <div className="flex cursor-pointer  bg-cover hover:shadow-gray-600 shadow-md transition duration-500 mb-1  rounded-md ">
        <div className="w-screen h-full flex items-center justify-between px-10 rounded-md">
          <h1 className="text-gray-50">#{listTop}</h1>
          <div className="text-left flex items-start">
            <h1 className="text-gray-100 font-bold">{title}</h1>
            <h2 className="text-yellow-400 font-bold ml-2">
              {(vote / Number(data)).toFixed(1)}
            </h2>
          </div>
          <div>
            <h1 className="text-gray-100 ">Reviews ({data})</h1>
          </div>
        </div>
      </div>
    </Link>
  )
}
