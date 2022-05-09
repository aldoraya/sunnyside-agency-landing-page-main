export default function Body3() {
    return (
    <section className="grid grid-cols-1 md:grid-cols-2 overflow-hidden font-barlow relative bottom-2">
        <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center" className="md:hidden block">
        <div className="bg-cover w-full h-full bg-center flex justify-center items-center text-graphic-design bg-graphic-design-mobile" style={{ height: "570px" }}>
            <div className="relative top-40 text-center px-10 md:px-48">
                <p className="text-2xl font-Fraunces font-black">Graphic Design</p>
                <p className="pt-5 text-md">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients&apos; attention.</p>
            </div>
        </div>
        </div>
        
        <div data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center">
            <div className="bg-cover w-full h-full bg-center hidden md:flex justify-center items-center text-graphic-design bg-graphic-design-dekstop" style={{ height: "570px" }}>
                <div className="relative top-40 text-center px-10 md:px-20 lg:px-32 xl:px-48">
                    <p className="text-2xl font-Fraunces font-black">Graphic Design</p>
                    <p className="pt-5 text-md">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients&apos; attention.</p>
                </div>
            </div>
        </div>
        
        <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center" className="md:hidden block">
            <div className="bg-cover w-full h-full bg-center md:hidden flex justify-center items-center text-photography bg-photography-mobile" style={{ height: "570px "}}>
                <div className="relative top-40 text-center px-10 md:px-48">
                    <p className="text-2xl font-Fraunces font-black">Photography</p>
                    <p className="pt-5 text-md">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
            </div>
        </div>
        
        <div data-aos="fade-left"
            aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center">
            <div className="bg-cover w-full h-full bg-center hidden md:flex justify-center items-center text-photography bg-photography-dekstop" style={{ height: "570px" }}>
                <div className="relative top-40 text-center px-10 md:px-20 lg:px-32 xl:px-48">
                    <p className="text-2xl font-Fraunces font-black">Photography</p>
                    <p className="pt-5 text-md">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
            </div>
        </div>
    </section>
    )
}