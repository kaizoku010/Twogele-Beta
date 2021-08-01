import Image from "next/image";
import Logo from "../images/logo.png";
import HeaderIcon from "../components/HeaderIcon";
import { signOut, useSession } from "next-auth/client";



import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HeartIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
 } from "@heroicons/react/solid";


import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
  } from "@heroicons/react/outline";


function Header() {

    const [session] = useSession();


    return (
        <div className="sticky top:0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md ">
            {/* left */}
            <div className="flex items-center">
                <Image src={Logo} width={40}
                    height={40}
                    alt=""
                    layout="fixed" />
                <div className="flex ml-2 item-center bg-gray-100 p-2 rounded-full">
                    <SearchIcon
                        className="h-6 text-gray-600" />
                    <input className= "flex hidden md:inline-flex flex-shrink outline-none ml-2 items-center bg-transparent"
                        type="text"
                    
                        placeholder="Search Twogele" />
                </div>
            </div>
            {/* center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                                </div>
            </div>
            {/* right */}
            <div className="flex items-center sm:space-x-2 justify-end ">
                {/* profile */}
                <Image
                    onClick={signOut}
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    alt=""
                    width="40"
                    height="40"
                    layout="fixed"/>
                
                <p className=" whitespace-nowrap font-semibold pr-3" >{session.user.name}</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon"/>
            
            </div>
            
        </div>
    )
}

export default Header
