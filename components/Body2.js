import Link from 'next/link'

export default function Body2() {
    return (
    <section className="w-full h-full overflow-hidden font-barlow">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-full h-full">
                <div data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="center" className="hidden md:block" >
                <img src="/image-stand-out-dekstop.jpg"/>
                </div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="center" className="block md:hidden" >
                    <img src="/image-stand-out-mobile.jpg"/>
                </div>
            </div>
            <div className="w-full h-full px-8 py-14 md:p-8 md:pt-12 lg:p-16 lg:pt-28 xl:p-28 xl:pt-40">
                <div className="text-black text-center md:text-left text-5xl md:text-2xl lg:text-4xl xl:text-5xl font-Fraunces font-black">
                    <h2>Stand out to the right audiance</h2>
                </div>
            <div className="py-8 block md:hidden text-center text-lg text-grayish-blue-darkest">
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
            </div>
            <div className="py-8 hidden md:block text-grayish-blue-darkest md:text-sm lg:text-base">
                <p>Using a collaborative formula of designers, researchers,</p>
                <p>photographers, videographers, and copywriters, we'll </p>
                <p> build and extend your brand in digital places.</p>
            </div>
            <div className="text-black text-center md:text-left">
                <a href='/' className="font-black font-Fraunces tracking-wider">
                    LEARN MORE
                    <div className='flex flex-1 justify-center md:block'>
                    <nav className="w-32 h-2 rounded-2xl opacity-30 relative bottom-2 bg-learn-soft-red hover:opacity-60"></nav>
                    </div>
                </a>
            </div>
            </div>
        </div>
    </section>
    )
}