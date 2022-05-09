import Image from "next/image"

export default function Body4() {
    return (
<section className="w-full h-full xl:h-screen p-5 md:p-28 text-grayish-blue font-barlow">
  <h2 className="text-center text-xl md:text-2xl font-bold font-Fraunces tracking-widest pt-10 md:pt-0">CLIENT TESTIMONIALS</h2>
  <div className="grid grid-cols-1 xl:grid-cols-3 p-2 md:py-10 pt-0 md:pt-20 md:space-x-8 space-y-20 xl:space-y-0">
    <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center" className="pt-12 md:pt-0">
      <div className="flex flex-1 justify-center">
        <Image
        className="rounded-full"
         src="/image-emily.jpg"
         alt="image-emily"
         width={80}
         height={80}
         />
      </div>
      <div className="text-center">
      <div className="block md:hidden">
        <p className="pt-10 md:pt-14 font-bold space-y-1 text-grayish-blue-darkest">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
      </div>
      <div className="hidden md:block pt-14 font-bold space-y-1 text-grayish-blue-darkest">
        <p>We put our trust in Sunnyside and they</p>
        <p>delivered, making sure our needs were met</p>
        <p>and deadlines were always hit.</p>
      </div>
        <h2 className="pt-10 md:pt-14 font-black text-black font-Fraunces text-xl">Emily R.</h2>
        <p className="pt-2 text-sm text-grayish-blue">Marketing Director</p>
      </div>
    </div>
    <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center">
      <nav className="flex flex-1 justify-center">
        <Image
          className="rounded-full"
          src="/image-thomas.jpg"
          alt="image-thomas"
          width={80}
          height={80}
         />
      </nav>
      <div className="text-center">
        <div className="block md:hidden">
          <p className="pt-14 font-bold space-y-1 text-grayish-blue-darkest">Sunnyside&apos;s enthusiasm coupled with their keen interest in our brand&apos;s success made it a satisfying and enjoyable experience.</p>
        </div>
      <div className="hidden md:block pt-14 font-bold space-y-1 text-grayish-blue-darkest">
        <p>Sunnyside&apos;s enthusiasm coupled with their</p>
        <p>keen interest in our brand&apos;s success made it</p>
        <p>a satisfying and enjoyable experience.</p>
      </div>
      <h2 className="pt-14 font-black text-black font-Fraunces text-xl">Thomas S.</h2>
      <p className="pt-2 text-sm text-grayish-blue">Chief Operating Officer</p>
    </div>
  </div>
  <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center">
    <nav className="flex flex-1 justify-center">
      <Image
       className="rounded-full"
       src="/image-jennie.jpg"
       alt="image-jennie"
       width={80}
       height={80}
       />
      </nav>
      <div className="text-center w-full h-max">
        <p className="block md:hidden pt-14 font-bold text-grayish-blue-darkest">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
        <div className="hidden md:block pt-14 font-bold space-y-1 text-grayish-blue-darkest">
          <p>Incredible end result! Our sales increased</p>
          <p>over 400% when we worked with Sunnyside.</p>
          <p>Highly recommended!</p>
        </div>
        <h2 className="pt-14 font-black text-black font-Fraunces text-xl">Jennie F.</h2>
        <p className="pt-2 text-sm text-grayish-blue">Business Owner</p>
      </div>
    </div>
  </div>
</section>
    )
}