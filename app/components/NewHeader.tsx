import {Link} from '@remix-run/react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import {useEffect, useState} from 'react';
import { MdLanguage } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { RiLogoutBoxRLine, RiShoppingBasketLine, RiUser6Line} from "react-icons/ri";
import { BsBoxSeam } from 'react-icons/bs';

function NewHeader() {

  const [active,setActive] = useState(0)

  return (
    <>
      <header className='main-header max-h-[120px]'>
        <div className="header max-h-[120px]">
          <div className="logo">
            <Link to="/">
              <img
                alt="Fresh! by Gleaners logo"
                src="https://cdn.shopify.com/s/files/1/0715/9106/7900/files/T_NEW_LOGO_2024-10-28_18.27.37-removebg-preview_1_b8754909-361c-4fee-93f5-7edc5b478e86.png?v=1731677159"
                height={'75'}
              />
            </Link>
          </div>
          <div className="menu gap-[40px] md:flex hidden">
            <div onMouseEnter={() => setActive(1)} onMouseLeave={() => setActive(0)} className="menu-item">
              <Link
                to={'#'}
                className={`text-[17px] ${active === 1 ? 'border-b-[2px] border-b-[#ED5A2E]' : 'border-b-[2px] border-b-[#FFFFFF]'} leading-[1.5] hover:!no-underline pb-1 px-3 flex flex-row items-center`}
              >
                <RiUser6Line size={24} color={active === 1 ? '#ED5A2E' : '#0E4D49'}/>
                <span className={`nav-left-text ml-[6px] ${active === 1 ? '!text-[#ED5A2E]' : '!text-[#0B3E3A]'}`}>
                  Profile
                </span>
              </Link>
            </div>
            <div onMouseEnter={() => setActive(2)} onMouseLeave={() => setActive(0)} className="menu-item">
              <Link
                to={'#'}
                className={`text-[17px] ${active === 2 ? 'border-b-[2px] border-b-[#ED5A2E]' : 'border-b-[2px] border-b-[#FFFFFF]'} leading-[1.5] hover:!no-underline pb-1 px-3 flex flex-row items-center`}
              >
                <BsBoxSeam size={20} color={active === 2 ? '#ED5A2E' : '#0E4D49'}/>
                <span className={`nav-left-text ml-[6px] ${active === 2 ? '!text-[#ED5A2E]' : '!text-[#0B3E3A]'}`}>
                  Orders
                </span>
              </Link>
            </div>
            <div onMouseEnter={() => setActive(3)} onMouseLeave={() => setActive(0)} className="menu-item">
              <Link
                to={'#'}
                className={`text-[17px] ${active === 3 ? 'border-b-[2px] border-b-[#ED5A2E]' : 'border-b-[2px] border-b-[#FFFFFF]'} leading-[1.5] hover:!no-underline pb-1 px-3 flex flex-row items-center`}
              >
                <RiShoppingBasketLine size={24} color={active === 3 ? '#ED5A2E' : '#0E4D49'}/>
                <span className={`nav-left-text ml-[6px] ${active === 3 ? '!text-[#ED5A2E]' : '!text-[#0B3E3A]'}`}>
                  Basket
                </span>
              </Link>
            </div>
          </div>
          <div className="nav">
            <div className="nav-item">
              <LanguageMenu />
            </div>
            <div className="nav-item">
              <Link to="/account" className='cursor-pointer'>
                <div className='flex flex-col items-center'>
                  <RiLogoutBoxRLine size={24}/>
                  <span className='nav-text'>
                    Log in
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NewHeader;

function LanguageMenu() {
  const languageList = [
    {id: 1, name: 'EN'},
    {id: 2, name: 'SP'},
    {id: 3, name: 'AR'},
  ];

  const [selectedPerson, setSelectedPerson] = useState();

  useEffect(()=>{
    if(localStorage.getItem('lang')){
      const langData = JSON.parse(localStorage.getItem('lang'))
      setSelectedPerson(langData)
    } else{
      localStorage.setItem('lang',JSON.stringify(languageList[0]))
    }
  },[])

  const onSelectOfLanguage = (lang: {id:number, name:string}) => {
      setSelectedPerson(lang)
      localStorage.setItem('lang' , JSON.stringify(lang))
  }

  return (
    <Listbox value={selectedPerson} onChange={(lang) => onSelectOfLanguage(lang)}>
      <ListboxButton className='flex flex-col items-start cursor-pointer'>
        <MdLanguage size={24}/>
          <div className='flex flex-row justify-start items-center'>
            <span className='mr-[4px] nav-text'>
              {selectedPerson?.name}
            </span>
            <span className='mb-[2px]'>
              <FaAngleDown size={14}/>
            </span>
          </div>
      </ListboxButton>
      
      <ListboxOptions anchor="bottom" className="bg-white shadow">
        {languageList.map((lang) => (
          <ListboxOption
            key={lang.id}
            value={lang}
            className="data-[focus]:bg-blue-100 z-[1001] relative cursor-pointer hover:bg-white bg-white text-[14px] leading-[1.5] px-[9px] py-[18px] !text-[#0B3E3A]"
          >
            {lang.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
