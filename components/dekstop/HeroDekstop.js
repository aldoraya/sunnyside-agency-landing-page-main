import Link from "next/link"
import Image from "next/image"

export default function HeroDekstop() {
    return (
    <section>
        <div className="hidden sm:block bg-cover w-full h-screen bg-center bg-header-dekstop font-barlow">
            <div className="flex p-4 pt-6 text-white">
            <h2 className="text-2xl font-black pl-4 z-10">sunnyside</h2>
                <div className="hidden md:flex flex-1 justify-end space-x-10 mr-6 z-10">
                <ul className="flex text-md relative top-2 space-x-10">
                    <li className="hover:text-navbar hover:duration-1000 duration-1000">
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
                    <button className="px-6 py-3 bg-white text-black rounded-2xl font-Fraunces text-xs font-bold hover:bg-white hover:bg-opacity-30 hover:text-white hover:duration-1000 duration-1000">
                        CONTACT
                    </button>
                </Link>
                </div>
            </div>
            <div className="flex flex-1 justify-center text-white">
            <h2 className="tracking-widest relative top-20 md:top-24 font-black text-4xl text-center md:text-5xl font-Fraunces z-10">WE ARE CREATIVES</h2>
            </div>
            <div className="relative bottom-28">
            <div className="flex justify-center items-center h-screen">
                <nav className="animate-bounce h-32">
                <Image
                src="/icon-arrow-down.svg"
                alt="icon-arrow-down"
                width={36}
                height={114}
                 />
                </nav>
            </div>
            </div>
        </div>
    </section>
    )
}