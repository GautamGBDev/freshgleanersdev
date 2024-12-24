/* eslint-disable prettier/prettier */
import Object1 from '../assets/images/object1.png';
import Object2 from '../assets/images/object2.png';
import Object3 from '../assets/images/object3.png';
import BlogImage from '../assets/images/blog-image.png';

const GuestLandingPage = () => {
  return (
    <>  
      <div className="hero-section">
      <img className='object1' src={Object1} alt="object1" />
      <img className='object2' src={Object2} alt="object2" />
      <img className='object3' src={Object3} alt="object3" />
      <div className='hero-container'>
        <section className="flex justify-start items-center">
          <div className="content-box mt-[200px] md:mt-[80px]">
            <h1 className="!m-0 text-4xl font-bold !mb-[32px] hero-title">Where optimism thrives & hunger diminishes</h1>
            <button className="cta-button w-[390px] h-[56px] bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-500 mb-0 md:mb-4 cursor-pointer">Register Now</button>
          </div>
        </section>
      </div>
    </div>
    <div className='main-blog'>
      <div className='hero-container flex lg:flex-row flex-col items-center'>
        <div className='blog-left'>
          <h2 className='blog-heading'>Lorem Ipsum</h2>
          <p className='blog-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Suscipit blandit aliquet ipsum eleifend nec blandit cubilia tempus purus. Laoreet nisl habitasse sodales aliquet hendrerit donec magnis. Purus cras himenaeos ut bibendum lectus; diam mollis lobortis nisl. Vulputate ultrices fusce nullam; semper lectus suscipit. Pretium at aliquet dolor aliquam tristique fermentum at placerat. Justo euismod quam hendrerit ex sem interdum tincidunt nisl nullam.
          </p>
        </div>
        <div className='blog-right flex flex-row justify-center items-center'>
          <img className='max-w-full h-auto' src={BlogImage} alt="mobile-image" />
        </div>
      </div>
    </div>
    </>
  )
}

export default GuestLandingPage