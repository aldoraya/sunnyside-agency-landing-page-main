import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
    <section className="w-full h-full bg-[#90d4c5] text-footer font-barlow">
    <div className="py-14">
        <h2 className="text-4xl font-black text-center">sunnyside</h2>
        <ul className="flex flex-1 justify-center space-x-16 py-12 font-bold text-base">
        <li>
            <Link href="/">
                <a className="active:text-white md:hover:text-white hover:duration-1000 duration-1000" style={{ "WebkitTapHighlightColor": "transparent" }}>About</a>
            </Link>
        </li>
        <li>
            <Link href="/">
                <a className="active:text-white md:hover:text-white hover:duration-1000 duration-1000" style={{ "WebkitTapHighlightColor": "transparent" }}>Service</a>
            </Link>
        </li>
        <li>
            <Link href="/">
                <a className="active:text-white md:hover:text-white hover:duration-1000 duration-1000" style={{ "WebkitTapHighlightColor": "transparent" }}>Project</a>
            </Link>
        </li>
        </ul>
        <div className="flex flex-1 justify-center space-x-6 pt-10 pb-6">
        <Link href="/">
        <a style={{ "WebkitTapHighlightColor": "transparent" }}>
            <Image
            className="active:text-white md:hover:bg-white hover:duration-1000 duration-1000"
             src="/icon-facebook.svg" 
             alt="icon-facebook"
             width={20}
             height={20} />
        </a>
        </Link>
        <Link href="/">
        <a style={{ "WebkitTapHighlightColor": "transparent" }}>
            <Image 
            className="active:text-white md:hover:bg-white rounded-md hover:duration-1000 duration-1000"
            src="/icon-instagram.svg" 
            alt="icon-instagram"
            width={20}
            height={20}
            />
        </a>
        </Link>
        <Link href="/">
        <a style={{ "WebkitTapHighlightColor": "transparent" }}>
            <Image
            className="active:text-white md:hover:bg-white rounded-full hover:duration-1000 duration-1000"
            src="/icon-pinterest.svg"
            alt="icon-pinterest"
            width={20}
            height={20}
              />
        </a>
        </Link>
        <Link href="/">
        <a style={{ "WebkitTapHighlightColor": "transparent" }}>
            <Image 
            className="active:text-white md:hover:bg-white rounded-md hover:duration-1000 duration-1000"
            src="/icon-twitter.svg" 
            alt="icon-twitter"
            width={20}
            height={20}
            /></a>
        </Link>
        </div>
        <div className="text-center">
            Challenge by <a style={{ "WebkitTapHighlightColor": "transparent" }} className="font-bold active:text-white md:hover:text-white hover:duration-1000 duration-1000" href="https://www.frontendmentor.io?ref=challenge" rel="noopener">Frontend Mentor</a>.
            Coded by <a style={{ "WebkitTapHighlightColor": "transparent" }} className="font-bold active:text-white md:hover:text-white hover:duration-1000 duration-1000" href="https://github.com/aldoraya" rel="noopener">Aldo</a>.
        </div>
    </div>
    </section>
    )
}