import { Link } from '@remix-run/react'
import { useState } from 'react'
import { BsBoxSeam } from 'react-icons/bs'
import { RiShoppingBasketLine, RiUser6Line } from 'react-icons/ri'

const MobileHeaderBottom = () => {

  const [active,setActive] = useState(0)

  return (
    <div className='bottom-navigation'>
        <div className='flex flex-row justify-center gap-[20px]'>
            <div onClick={() => setActive(1)} className="menu-item">
              <Link
                to={'#'}
                className={`text-[17px] ${active === 1 ? 'border-b-[2px] border-b-[#ED5A2E]' : 'border-b-[2px] border-b-[#FFFFFF]'} leading-[1.5] hover:!no-underline pb-1 px-3 flex flex-col items-center`}
              >
                <RiUser6Line size={24} color={active === 1 ? '#ED5A2E' : '#0E4D49'}/>
                <span className={`nav-left-text ml-[6px] ${active === 1 ? '!text-[#ED5A2E]' : '!text-[#0B3E3A]'}`}>
                  Profile
                </span>
              </Link>
            </div>
            <div onClick={() => setActive(2)} className="menu-item">
              <Link
                to={'#'}
                className={`text-[17px] ${active === 2 ? 'border-b-[2px] border-b-[#ED5A2E]' : 'border-b-[2px] border-b-[#FFFFFF]'} leading-[1.5] hover:!no-underline pb-1 px-3 flex flex-col items-center`}
              >
                <BsBoxSeam size={20} color={active === 2 ? '#ED5A2E' : '#0E4D49'}/>
                <span className={`nav-left-text ml-[6px] mt-[4px] ${active === 2 ? '!text-[#ED5A2E]' : '!text-[#0B3E3A]'}`}>
                  Orders
                </span>
              </Link>
            </div>
            <div onClick={() => setActive(3)} className="menu-item">
              <Link
                to={'#'}
                className={`text-[17px] ${active === 3 ? 'border-b-[2px] border-b-[#ED5A2E]' : 'border-b-[2px] border-b-[#FFFFFF]'} leading-[1.5] hover:!no-underline pb-1 px-3 flex flex-col items-center`}
              >
                <RiShoppingBasketLine size={24} color={active === 3 ? '#ED5A2E' : '#0E4D49'}/>
                <span className={`nav-left-text ml-[6px] ${active === 3 ? '!text-[#ED5A2E]' : '!text-[#0B3E3A]'}`}>
                  Basket
                </span>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default MobileHeaderBottom
