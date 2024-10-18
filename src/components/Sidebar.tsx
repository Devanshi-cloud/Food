import { CalendarCheck, Home, User, Video, X } from "lucide-react";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import generateUniqueId from "generate-unique-id";


interface ISidebar{
    open:boolean;
    onClose:any;
}
const routes = [
    {
        path: '/',
        label:'Home',
        icon:Home,
        activePaths:['/']
    },
    {
        path: '/dashboard/profile',
        label:'Profile',
        icon:User,
        activePaths:['/dashboard/profile']
    },
    {
        path: '/dashboard/schedule',
        label:'Schedule',
        icon:CalendarCheck,
        activePaths:['/dashboard/schedule']
    },
    {
        path: `/dashboard/golive?roomID=${generateUniqueId({length:6})}&role=Host`,
        label:'Go live',
        icon:Video,
        target:'_blank',
        activePaths:[`/dashboard/golive?roomID=${generateUniqueId({length:6})}&role=Host`]
    },
]
const Sidebar = ({open, onClose}:ISidebar) => {
    const {pathname} = useLocation()
  return (
    <div className={`h-screen fixed bg-bgsecondary w-[300px] 
    top-0 z-[200] p-4 pr-0 transition-all duration-500 
    left-[-320px] md:left-0 ${open ? 'left-[0px]':''}`}>
        <Logo/>
        <div onClick={onClose} 
        className='absolute top-4 right-4 size-10 bg-bgprimary text-gray-500 
        flex items-center justify-center rounded-full cursor-pointer 
        hover:text-black transition-all duration-500 md:hidden '>
            <X/>
        </div>
       <div className='pt-8'>
        {
            routes.map((route,index)=>(
                <Link
                to={route.path}
                target={route.target}
                key={index}
                className={`flex items-center gap-1 cursor-pointer px-5 py-3
                    rounded-[51px] rounded-tr-none rounded-br-none text-text
                    text-gray-500 transition-all hover:text-black 
                    ${route.activePaths.includes(pathname) 
                    ? 'bg-bgprimary text-primary':'text-gray-500'}`}>{route.label}</Link>
            ))
        }
       </div>
        </div>
  )
}

export default Sidebar