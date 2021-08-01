function HeaderIcon({ Icon, active }) {
    return (
        <div className="flex 
        cursor-pointer
        md:px-10 sm:h-14
        rounded-xl
        active:border-b-2
        items-center
        active:border-blue-500
      md:hover:bg-gray-100 group">
            
            <Icon className={`text-gray-500 text-center
             sm:h-7 mx-auto h-5 group-hover:text-blue-500
             ${active && "text-blue-500"
                }`}/>
        </div>
    )
}

export default HeaderIcon
