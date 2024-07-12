import { Progress } from '../ui/progress'
import { utilStars } from '@/utils/utilStars'

interface typeBar {
  total: []
  vote?: number
}

export function BarProgressAvaliation({ total }: typeBar) {
  if (!Array.isArray(total)) {
    return <h1>Não há avaliações até o momento</h1>
  }
  const five = total.filter((e: { vote: number }) => e.vote === 5)
  const four = total.filter((e: { vote: number }) => e.vote === 4)
  const three = total.filter((e: { vote: number }) => e.vote === 3)
  const two = total.filter((e: { vote: number }) => e.vote === 2)
  const one = total.filter((e: { vote: number }) => e.vote === 1)

  return (
    <>
      {five ? (
        <div className="flex items-center gap-2 justify-between">
          {' '}
          <span className="text-yellow-500 flex  ">
            {utilStars(5)}
          </span>{' '}
          <Progress value={100} className="h-2 w-44 " />{' '}
          <h1 className="text-center text-xs font-bold">
            ({five.length}) reviews
          </h1>
        </div>
      ) : null}
      {four ? (
        <div className="flex items-center gap-2 justify-between">
          {' '}
          <span className="text-yellow-500 flex  ">
            {utilStars(4)}
          </span>{' '}
          <Progress value={50} className="h-2  w-44  " />{' '}
          <h1 className="text-center text-xs font-bold">
            ({four.length}) reviews
          </h1>
        </div>
      ) : null}
      {three ? (
        <div className="flex items-center gap-2 justify-between">
          {' '}
          <span className="text-yellow-500 flex  ">
            {utilStars(3)}
          </span>{' '}
          <Progress value={30} className="h-2 w-44  " />{' '}
          <h1 className="text-center text-xs font-bold">
            ({three.length}) reviews
          </h1>
        </div>
      ) : null}
      {two ? (
        <div className="flex items-center gap-2 justify-between">
          {' '}
          <span className="text-yellow-500 flex  ">
            {utilStars(2)}
          </span>{' '}
          <Progress value={20} className="h-2 w-44  " />{' '}
          <h1 className="text-center text-xs font-bold">
            ({two.length}) reviews
          </h1>
        </div>
      ) : null}
      {one ? (
        <div className="flex items-center gap-2 justify-between">
          {' '}
          <span className="text-yellow-500 flex  ">
            {utilStars(1)}
          </span>{' '}
          <Progress value={10} className="h-2  w-44 " />{' '}
          <h1 className="text-center text-xs font-bold">
            ({one.length}) reviews
          </h1>
        </div>
      ) : null}
    </>
  )
}
