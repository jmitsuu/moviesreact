import { Link } from 'react-router-dom'
import { BiCameraMovie } from 'react-icons/bi'
import { TbDeviceAnalytics } from 'react-icons/tb'
import { IoHomeOutline } from 'react-icons/io5'
import { ReactElement } from 'react'

const listMenu = [
  {
    route: '/',
    title: 'Home',
    icon: <IoHomeOutline />,
  },
  {
    route: '/popular',
    title: 'Popular',
    icon: <BiCameraMovie />,
  },
  {
    route: '/onthetop',
    title: 'Em Alta',
    icon: <TbDeviceAnalytics />,
  },
]
interface typeMenu {
  route: string
  title: string
  icon: ReactElement
}
export function Header() {
  return (
    <aside className=" w-full h-24 p-2 px-4 bg-black">
      <div className="flex h-full justify-center items-center">
        {listMenu.map((el: typeMenu) => {
          return (
            <div key={el.title} className="bg-transparent">
              <Link
                className="flex text-gray-200 p-2 items-center gap-2  uppercase rounded hover:shadow-lg -shadow-spread-2"
                to={el.route}
              >
                {el.icon} {el.title}
              </Link>
            </div>
          )
        })}
      </div>
    </aside>
  )
}
