import Link from 'next/link'

export default function Body1Mobile() {
    return (
    <section className="grid grid-cols-1 md:hidden font-barlow">
        <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center" className="w-full h-full">
            <img className="block md:hidden" src="/image-transform-mobile.jpg"/>
        </div>
        <div className="w-full h-full px-8 py-14">
            <div className="text-black text-center text-5xl font-Fraunces font-black">
                <h2>Transform your</h2>
                <h2>brand</h2>
            </div>
            <div className="py-8 text-center text-grayish-blue-darkest text-lg">
                <p>We are a full-service creative agency specializing in helping brands grow fast. Eangage your clients through compeling visuals that do most of the marketing for you.</p>
            </div>
            <div className="text-black text-center">
            <a href="/" className="font-black font-['Fraunces'] tracking-wider text-lg">
            LEARN MORE
            <div className='flex flex-1 justify-center'>
            <nav className="w-36 h-2 rounded-2xl opacity-30 relative bottom-2 bg-learn-yellow hover:opacity-60"></nav>
            </div>
            </a>
          
            <div className="flex flex-1 justify-center">
                <nav className="w-32 h-2 rounded-2xl opacity-30 relative bottom-2 bg-yellow"></nav>
            </div>
            </div>
        </div>
    </section>
    )
}