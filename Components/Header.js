import { useRouter } from 'next/dist/client/router';
import {useRef} from "react"
import { Search, XCircleOutline } from 'heroicons-react'

function Header() {
   const router =useRouter();
   const searchInputRef = useRef(null);

   const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
};
    return (
        <header className="sticky top-0 bg-black">
            <div className="flex w-full p-6 items-center">
         <h1 onClick={() => router.push("/")} 
         className="text-white 
          cursor-pointer text-xl font-extrabold xl:text-4xl md:text-3xl ">
        DARK<span className="text-red-600">WEB</span></h1>
        <form className="flex flex-grow py-3 px-6 ml-10 mr-5 border 
        border-gray-600 rounded-full
        max">
         <Search className="h-5 mr-3 text-red-600"/>
        <input ref={searchInputRef} type="text"
        className="flex grow bg-transparent 
        text-white 2-full focus:outline-none w-full"/>
        <XCircleOutline onClick={()=>(searchInputRef.current.value = "")}
        className="h-6 mr-3 text-red-600 cursor-pointer"/>
        <button hidden onClick={search}
        type="submit">Search</button>
        </form>
        
        </div>
        </header>
    )
}

export default Header
