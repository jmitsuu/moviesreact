import { Popular } from '@/app/pages/Popular'
import { PlayingNow } from '@/app/pages/PlayingNow'
import { Default } from '@/layout/Default'
import { Error404 } from '@/layout/Error404'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from '@/app/pages/Home'
import { PageReview } from '@/app/pages/PageReview'

export function Route() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Default />,
      errorElement: <Error404 />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/popular',
          element: <Popular />,
        },
        {
          path: 'pagereview/:id',
          element: <PageReview />,
        },

        {
          path: '/onthetop',
          element: <PlayingNow />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}
