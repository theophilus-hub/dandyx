import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '@/assets/dandyx.png'
import Link from 'next/link'
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Services', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'FAQ', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MobileNav() {
  return (
    <Disclosure as="nav" className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-2 lg:px-8 z-10">
        <div className="relative flex h-20 items-center justify-between px-4 w-full">
          
          <div className="flex w-full items-center justify-between  sm:items-stretch ">
            <div className="flex  items-center justify-center gap-2 ">
              <img
                alt="Your Company"
                src={"/dandyxwhite2.png"}
                className="h-8 w-auto"
              />
              <h4 className='text-white font-bold'>DANDYx</h4>
            </div>
            <div className="hidden  sm:ml-6 sm:block">
              <div className="flex  space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      
                      'rounded-md px-3 py-2 text-lg font-medium text-sec hover:text-main',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-xl p-2 text-text  hover:text-text ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="z-10 space-y-1 pb-3 pt-2 absolute top-0 w-1/2 h-[115vh] bg-secmain flex flex-col items-center justify-start py-4">
        <div className=" w-full flex flex-col justify-center items-start py-2">
          <img src="/dandyxmobile.png" className="px-4 mb-6" alt="" />
          <div className="bg-main w-full h-[1px] rounded-full"></div>
          
        </div>
        <div className="w-full px-4 flex flex-col justify-center space-y-4 py-16 ">
        <div>
        <Link href="/dashboard">
        <button className="flex items-center justify-start w-full gap-2  text-sm bg-main py-2 px-6 rounded-lg text-text">
                <span className=' w-6 h-6 flex items-center '><img src="/overview1.png" className=''  alt="" /></span>
                Overview
            </button>
        </Link>
            
        </div>
        <div>
        <Link href="/dashboard/giftcards">
        <button className="flex items-center justify-start w-full gap-2  text-sm py-2 px-6 rounded-lg text-text">
                <span className=' w-6 h-6 flex items-center '><img src="/gift2.png" className=''  alt="" /></span>
                Giftcards
            </button>
        </Link>
            
        </div>
        <div>
        <Link href="/dashboard/crypto">
        <button className="flex items-center justify-start w-full gap-2  text-sm py-2 px-6 rounded-lg text-text">
                <span className=' w-6 h-6 flex items-center '><img src="/crypto2.png" className=''  alt="" /></span>
                Crypto
            </button>
        </Link>
            
        </div>
        <div>
        <Link href="/dashboard/tx">
        <button className="flex items-center justify-start w-full gap-2  text-xs py-2 px-6 rounded-lg text-text">
                <span className=' w-6 h-6 flex items-center '><img src="/trans2.png" className=''  alt="" /></span>
                Transactions
            </button>
        </Link>
            
        </div>
        <div>
          <Link href="/dashboard/settings">
          <button className="flex items-center justify-start w-full gap-2  text-sm py-2 px-6 rounded-lg text-text">
                <span className=' w-6 h-6 flex items-center '><img src="/settings2.png" className=''  alt="" /></span>
                Settings
            </button>
          </Link>
            
        </div>

        </div>
          {/* {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
               
                'block rounded-md px-4 py-2 text-lg font-medium text-sec',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))} */}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}