import Image from "next/image"
import React from "react"

export default function Body5Mobile() {
    const lazyRoot = React.useRef(null)

    return (
    <section className="grid md:hidden grid-cols-2 relative top-2">
        <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center"
            className="relative top-2">
            <Image
             src="/image-gallery-milkbottles-mobile.jpg"
             alt="image-gallery-milkbottles-mobile"
             width={376}
             height={376}
             />
        </div>
        <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center"
            className="relative top-2">
            <Image
             src="/image-gallery-orange-mobile.jpg"
             alt="image-gallery-orange-mobile.jpg"
             width={376}
             height={376}
             />
        </div>
        <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center">
            <Image
             lazyRoot={lazyRoot}
             src="/image-gallery-cone-mobile.jpg"
             alt="image-gallery-cone-mobile"
             width={376}
             height={376}
             />
        </div>
        <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center">
            <Image
            src="/image-gallery-sugar-cubes-mobile.jpg"
            alt="image-gallery-sugar-cubes-mobile"
            width={376}
            height={376}
            />
        </div>
    </section>
    )
}