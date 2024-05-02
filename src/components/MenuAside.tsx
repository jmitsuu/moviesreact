import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { MdRateReview } from "react-icons/md";
import { TbDeviceAnalytics } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { TbFileLike } from "react-icons/tb";

const listMenu = [
  {
    route: "/",
    title: "Home",
    icon: <IoHomeOutline />,
   },
 {
  route: "/popular",
  title: "Popular",
  icon: <BiCameraMovie />,
 },
 {
  route: "/onthetop",
  title: "Em Alta",
  icon: <TbDeviceAnalytics />,
 },
 {
  route: "/reviews",
  title: "Reviews",
  icon: <MdRateReview />,
 },
 {
  route: "/yourreviews",
  title: "Seus Reviews",
  icon: <TbFileLike />,
 },
];

export function MenuAside() {
 return (
  <aside className="min-h-screen min-w-44 p-2 px-4 bg-[#322d38]">
   {listMenu.map((el: any) => {
    return (
      <div    key={el.title} className="w-full relative">
          <Link
      className="flex text-gray-200 items-center gap-2 my-8"
   
      to={el.route}
      
     >
      {el.icon} {el.title}
     </Link>
      </div>
    );
   })}
  </aside>
 );
}
