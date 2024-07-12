import { MenuAside } from '@/components/MenuAside'
import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
export function Default() {
  const location = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <div className=" relative    bg-[#1f1f1f] w-screen   overflow-hidden ">
      <div className="flex">
        <MenuAside />
        <div className=" px-10 pt-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
