import Link from "next/link"
import Image from "next/image"

export default function Body2() {
    return (
    <section className="w-full h-full overflow-hidden font-barlow relative bottom-2">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="center" className="hidden md:grid">
                <Image
                src="/image-stand-out-dekstop.jpg"
                alt="image-stand-out-dekstop"
                width={720}
                height={600}/>
           </div>
            <div data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="center" className="block md:hidden" >
                <Image 
                width={750}
                height={624}
                src="/image-stand-out-mobile.jpg"
                alt="image-stand-out-mobile"
                />
            </div>
            <div className="w-full h-full px-8 py-14 md:p-8 md:pt-12 lg:p-16 lg:pt-28 xl:p-28 xl:pt-40">
                <div className="text-black text-center md:text-left text-5xl md:text-2xl lg:text-4xl xl:text-5xl font-Fraunces font-black">
                    <h2>Stand out to the right audiance</h2>
                </div>
            <div className="py-8 block md:hidden text-center text-lg text-grayish-blue-darkest">
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we&apos;ll build and extend your brand in digital places.</p>
            </div>
            <div className="py-8 hidden md:block text-grayish-blue-darkest md:text-sm lg:text-base">
                <p>Using a collaborative formula of designers, researchers,</p>
                <p>photographers, videographers, and copywriters, we&apos;ll </p>
                <p> build and extend your brand in digital places.</p>
            </div>
            <div className="text-black text-center md:text-left">
                <Link href="/">
                <a className="font-black font-Fraunces tracking-wider">
                    LEARN MORE
                    <div className="flex flex-1 justify-center md:block">
                        <nav className="w-32 h-2 rounded-2xl opacity-30 relative bottom-2 bg-learn-soft-red hover:opacity-60"></nav>
                    </div>
                </a>
                </Link>
            </div>
            </div>
        </div>
    </section>
    )
}