import { Header } from '@/components/Header'
import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export function Default() {
  const location = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <div className="bg-black w-screen min-h-screen  ">
      <Header />

      <Outlet />
    </div>
  )
}
