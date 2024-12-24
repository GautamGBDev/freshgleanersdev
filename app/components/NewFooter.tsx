/* eslint-disable prettier/prettier */
import FooterLogo from '../assets/images/FooterLogo.png'
import WebsiteIcon from '../assets/images/Earth.png'

const NewFooter = () => {
  return (
    <>
        <div className='main-footer'>
            <div className='footer-container flex md:flex-row flex-col justify-between item-start'>
                <div className='mb-[32px] md:mb-0'>
                    <img className='mb-[12px]' src={FooterLogo} alt="Gleaners" />
                    <div className='flex flex-row gap-[6px] items-center'>
                        <img src={WebsiteIcon} alt='website'/>
                        <span className='website-text'>www.gcfb.org</span>
                    </div>
                </div>
                
                <nav className='main-navlink flex flex-row md:justify-center justify-between item-start'>
                    <ul>
                        <li className='!mt-0'><a href="#">Home</a></li>
                        <li><a href="#">Volunteer</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <ul>
                        <li className='!mt-0'><a href="#">Donate</a></li>
                        <li><a href="#">Get Help</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className='bg-[#082E2C] h-auto sm:h-[34px] py-2 sm:py-0 flex flex-row items-center'>
            <div className='container-copyright flex flex-row justify-between py-auto items-center md:gap-0 gap-[20px]'>
                <div className='copyright-text'>
                    © Copyright 2019 Gleaners Community Food Bank
                </div> 
                <div className='copyright-text'>
                    Gleaners Community Food Bank is a 501(c)3 organization — EIN: 38-2156255
                </div> 
            </div>
        </div>
    </>
  )
}

export default NewFooter