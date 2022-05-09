import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, forwardRef } from 'react'

export default function HeroMobile() {

  const MyLink = forwardRef((props, ref) => {
    let { href, children, ...rest } = props
    return (
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    )
  })
  
    return (
    <section className="block sm:hidden bg-cover w-full h-screen bg-center bg-header-mobile">
    <div className="flex p-4 pt-6 text-white">
        <h2 className="text-2xl font-black ml-2 z-10">sunnyside</h2>
        <div className="flex flex-1 justify-end">
      <Menu as="div" className="z-20">
        <div>
          <Menu.Button className="relative top-2 mr-2" style={{ '-webkit-tap-highlight-color': "transparent" }}>
          <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease duration-700 transform"
          enterFrom="opacity-0 -translate-y-full"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease duration-1000 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-full"
        >
          <Menu.Items className="absolute right-0 left-0 mt-10 font-barlow">
          <div className='absolute right-5 w-0 h-0 border-b-[100px] border-b-white border-l-[80px] border-l-transparent'></div>
          <div className='w-auto mx-5 mt-7 origin-top-right divide-y divide-gray-100 rounded-md bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='mx-auto'>
            <div className='py-6 px-16'>
              <Menu.Item>
                <MyLink href="/" style={{ '-webkit-tap-highlight-color': "transparent" }}>
                  <button
                    className='text-grayish-blue-dark font-semibold text-lg w-full left-0 right-0 relative p-4 active:text-black'
                  >About
                  </button>
                  </MyLink>
              </Menu.Item>
              <Menu.Item>
              <MyLink href="/" style={{ '-webkit-tap-highlight-color': "transparent" }}>
                  <button
                    className='text-grayish-blue-dark font-semibold text-lg w-full left-0 right-0 relative p-4 active:text-black'
                  >Service
                  </button>
                  </MyLink>
              </Menu.Item>
              <Menu.Item>
              <MyLink href="/" style={{ '-webkit-tap-highlight-color': "transparent" }}>
                  <button
                    className='text-grayish-blue-dark font-semibold text-lg w-full left-0 right-0 relative p-4 active:text-black'
                  >Projects
                  </button>
                  </MyLink>
              </Menu.Item>
              <div className='m-4 px-2'>
              <Menu.Item>
                <MyLink href="/" style={{ '-webkit-tap-highlight-color': "transparent" }}>
                  <button
                    className='text-gray-800 font-Fraunces font-semibold w-full left-0 right-0 relative text-base px-1 py-3 bg-learn-yellow rounded-3xl active:text-black'
                  >CONTACT
                  </button>
                  </MyLink>
              </Menu.Item>
              </div>
            </div>
            </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
    </div>
    <div className="flex flex-1 justify-center text-white">
        <h2 className="tracking-widest relative top-20 md:top-24 font-black text-4xl text-center md:text-5xl font-Fraunces">WE ARE CREATIVES</h2>
    </div>
    <div className="relative bottom-28">
        <nav className="flex justify-center items-center h-screen">
        <svg className='animate-bounce' width="36" height="114" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g>
        </svg>
        </nav>
    </div>
</section>
    )
}