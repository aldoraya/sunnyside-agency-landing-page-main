import Image from "next/image"

export default function Body5Dekstop() {
    return (
    <section className="w-full h-full hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative top-2 overflow-hidden">
        <div data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center">
            <Image
             src="/image-gallery-milkbottles-dekstop.jpg"
             alt="image-gallery-milkbottles-dekstop"
             width={720}
             height={894}
             />
        </div>
        <div data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center">
            <Image
             src="/image-gallery-orange-dekstop.jpg"
             alt="image-gallery-orange-dekstop"
             width={720}
             height={894}
             />
        </div>
        <div data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center">
            <Image src="/image-gallery-cone-dekstop.jpg"
            alt="image-gallery-cone-dekstop.jpg"
            width={720}
            height={894}
            />
        </div>
        <div data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center">
            <Image 
            src="/image-gallery-sugarcubes-dekstop.jpg"
            alt="image-gallery-sugarcubes-dekstop"
            width={720}
            height={894}
            />
        </div>
    </section>
    )
}