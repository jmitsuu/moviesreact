import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonMovie() {
  const repeat = 10
  const arrSkeleton = []
  for (let i = 0; i < repeat; i++) {
    arrSkeleton.push(
      <div className="flex flex-col  space-y-3  " key={i}>
        <Skeleton className="rounded-xl  w-44 bg-gray-700 min-h-72" />
        <div className="space-y-2">
          <Skeleton className="h-4  bg-gray-700" />
        </div>
      </div>,
    )
  }
  return arrSkeleton
}
