import { utilDateConverter } from '@/utils/utilDateConverter'
import { utilStars } from '@/utils/utilStars'
interface typeReview {
  date: string
  vote: number
  comment: string
}
export function ProfileReview({ date, vote, comment }: typeReview) {
  return (
    <div className="mt-5  p-4 rounded-md border  shadow  ">
      <div className="flex items-center gap-2  ">
        <div className="h-10 w-10 rounded-full ">
          <img
            src="http://yourreviews.app.jairo3478.c35.integrator.host/images/user.png"
            alt="backdrop"
          />
        </div>
        <div className="border-r-2 pr-4 w-32">
          <h1 className="text-xl mb-1">Anonimo</h1>
          <div className="flex items-center  gap-x-2">
            <span className="text-xs  font-bold">
              {' '}
              {vote.toFixed(1)}
            </span>
            <span className="text-yellow-500 flex text-md">
              {utilStars(vote)}
            </span>{' '}
          </div>
        </div>
      </div>

      <div className=" ">
        <div>
          <div className=" flex mt-3    items-center mb-3 border-t pt-1 ">
            {' '}
            <h2 className="text-gray-500 font-bold text-[0.8rem] border-b">
              {utilDateConverter(date)}
            </h2>
          </div>
        </div>
        <div className="w-full justify-center text-gray-600 text-[0.9rem] font-bold">
          {comment}
        </div>
      </div>
    </div>
  )
}
