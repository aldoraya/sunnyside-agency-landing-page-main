import Link from 'next/link'

export default function Body1Dekstop () {
    return (
    <section className="hidden md:grid md:grid-cols-2 overflow-hidden font-barlow">
        <div className="w-full h-full md:p-6 md:pt-10 lg:p-16 lg:pt-24 xl:p-32 xl:pt-40">
            <div className="text-black md:text-2xl lg:text-4xl xl:text-5xl font-Fraunces font-black">
                <h2 className="">Transform your</h2>
                <h2 className="">brand</h2>
            </div>
            <div className="py-8 md:text-sm lg:text-base text-grayish-blue-darkest">
                <p>We are a full-service creative agency specializing in</p>
                <p>helping brands grow fast. Eangage your clients through</p>
                <p>compeling visuals that do most of the marketing for you.</p>
            </div>
            <div className="text-black">
                <a href="/" className="font-black font-Fraunces tracking-wider md:text-md xl:text-xl">
              LEARN MORE
                <nav className="w-36 h-2 rounded-2xl opacity-30 relative bottom-2 bg-learn-yellow hover:opacity-60"></nav>
                </a>
            </div>
        </div>
        <div data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="center">
        <img src="/image-transform-dekstop.jpg" className="w-full h-full" />
        </div>
    </section>
    )
}