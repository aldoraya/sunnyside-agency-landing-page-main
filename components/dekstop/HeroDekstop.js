import Link from 'next/link'

export default function HeroDekstop() {
    return (
    <section>
        <div className="hidden sm:block bg-cover w-full h-screen bg-center bg-header-dekstop font-barlow">
            <div className="flex p-4 pt-6 text-white">
            <h2 className="text-2xl font-black pl-4 z-10">sunnyside</h2>
                <div className="hidden md:flex flex-1 justify-end space-x-10 mr-6 z-10">
                <ul className="flex text-md relative top-2 space-x-10">
                    <li className='hover:text-navbar hover:duration-1000 duration-1000'>
                        <Link href="/">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className="hover:text-navbar hover:duration-1000 duration-1000">
                        <Link href="/">
                            <a>Service</a>
                        </Link>
                    </li>
                    <li className="hover:text-navbar hover:duration-1000 duration-1000">
                        <Link href="/">
                            <a>Project</a>
                        </Link>
                    </li>
                </ul>
                <Link href="/">
                    <button className="px-6 py-3 bg-white text-black rounded-2xl font-['Fraunces'] text-xs font-bold hover:bg-white hover:bg-opacity-30 hover:text-white hover:duration-1000 duration-1000">
                        CONTACT
                    </button>
                </Link>
                </div>
            </div>
            <div className="flex flex-1 justify-center text-white">
            <h2 className="tracking-widest relative top-20 md:top-24 font-black text-4xl text-center md:text-5xl font-Fraunces z-10">WE ARE CREATIVES</h2>
            </div>
            <div className="relative bottom-28">
            <nav className="flex justify-center items-center h-screen">
                <svg className='animate-bounce' width="36" height="114" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g>
                </svg>
            </nav>
            </div>
        </div>
    </section>
    )
}