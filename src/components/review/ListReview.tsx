import { Link } from 'react-router-dom'

interface typeCardReview {
  title: string
  vote: number
  data: number
  listTop?: number
  poster_path?: string
  id: number
}
export function ListReview({
  title,
  vote,
  data,
  poster_path,
  id,
}: typeCardReview) {
  const urlImage = 'https://image.tmdb.org/t/p/w500'
  const url = urlImage + poster_path
  return (
    <Link to={`/pagereview/${id}`}>
      <div
        className={` cursor-pointer relative   mb-1  rounded-md hover:scale-105 z-50 m-2 transition-all`}
      >
        <img alt="poster" src={url} width={300} />
        <div className="f w-full ">
          <h1 className="text-white mt-3">{title}</h1>
          <h2 className="text-slate-400">
            Avaliações: <span className="text-white">{data}</span>
          </h2>
        </div>
        <h3 className="text-slate-400 absolute top-0 bg-black/80 rounded-br-md p-2 mr-3">Nota:  <span className='text-white text-xl'>{Number((vote / data)).toFixed(1)}</span></h3>
      </div>
    </Link>
  )
}
