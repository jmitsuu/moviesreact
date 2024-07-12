import { Link } from 'react-router-dom'
import { BiCameraMovie } from 'react-icons/bi'
import { MdRateReview } from 'react-icons/md'
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
  {
    route: '/reviews',
    title: 'Reviews',
    icon: <MdRateReview />,
  },
]
interface typeMenu {
  route: string
  title: string
  icon: ReactElement
}
export function MenuAside() {
  return (
    <aside className="min-h-screen  min-w-44 p-2 px-4 bg-[#322d38]">
      <div className="fixed">
        {listMenu.map((el: typeMenu) => {
          return (
            <div key={el.title} className="w-full bg-transparent">
              <Link
                className="flex text-gray-200 p-2 items-center gap-2 my-8 rounded hover:shadow-lg -shadow-spread-2"
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
