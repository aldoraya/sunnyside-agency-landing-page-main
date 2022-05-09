import Link from 'next/link'

export default function Footer() {
    return (
    <section className="w-full h-full bg-[#90d4c5] text-footer font-barlow">
    <div className="py-14">
        <h2 className="text-4xl font-black text-center">sunnyside</h2>
        <ul className="flex flex-1 justify-center space-x-16 py-12 font-bold text-base">
        <li>
            <Link href="/">
                <a className="active:text-white md:hover:text-white hover:duration-1000 duration-1000" style={{ '-webkit-tap-highlight-color': "transparent" }}>About</a>
            </Link>
        </li>
        <li>
            <Link href="/">
                <a className="active:text-white md:hover:text-white hover:duration-1000 duration-1000" style={{ '-webkit-tap-highlight-color': "transparent" }}>Service</a>
            </Link>
        </li>
        <li>
            <Link href="/">
                <a className="active:text-white md:hover:text-white hover:duration-1000 duration-1000" style={{ '-webkit-tap-highlight-color': "transparent" }}>Project</a>
            </Link>
        </li>
        </ul>
        <div className="flex flex-1 justify-center space-x-6 pt-10 pb-6">
        <Link href="/">
        <a className="active:text-white md:hover:bg-white hover:duration-1000 duration-1000" style={{ '-webkit-tap-highlight-color': "transparent" }}>
            <img src="/icon-facebook.svg" alt="facebook"/>
        </a>
        </Link>
        <Link href="/">
        <a className="active:text-white md:hover:bg-white rounded-md hover:duration-1000 duration-1000" style={{ '-webkit-tap-highlight-color': "transparent" }}>
            <img src="/icon-instagram.svg" alt="instagram"/>
        </a>
        </Link>
        <Link href="/">
        <a className="active:text-white md:hover:bg-white rounded-full hover:duration-1000 duration-1000" style={{ '-webkit-tap-highlight-color': "transparent" }}>
            <img src="/icon-pinterest.svg" alt="pinterest"/>
        </a>
        </Link>
        <Link href="/">
        <a className="active:text-white md:hover:bg-white rounded-md hover:duration-1000 duration-1000" style={{ '-webkit-tap-highlight-color': "transparent" }}>
            <img src="/icon-twitter.svg" alt="twitter"/></a>
        </Link>
        </div>
        <div className="text-center">
            Challenge by <a style={{ '-webkit-tap-highlight-color': "transparent" }} className='font-bold active:text-white md:hover:text-white hover:duration-1000 duration-1000' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a style={{ '-webkit-tap-highlight-color': "transparent" }} className='font-bold active:text-white md:hover:text-white hover:duration-1000 duration-1000' href="https://github.com/aldoraya">Aldo</a>.
        </div>
    </div>
    </section>
    )
}