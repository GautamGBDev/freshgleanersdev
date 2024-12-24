/* eslint-disable prettier/prettier */
import { useEffect, useRef, useState } from 'react';

const GuestLandingJSX = ({ data }) => {
  const [resolvedData, setResolvedData] = useState(null);

  useEffect(() => {
    // Check if the data is a Promise and resolve it if necessary
    if (data instanceof Promise) {
      data.then(res => {
        setResolvedData(res);
      });
      console.log("resolvedData: ", resolvedData);
    } else {
      setResolvedData(data);
    }
  }, [data]);

  // Safe access to the metafields data (check if they exist)
  const title = resolvedData?.page?.metafields?.[0]?.value || 'Default Title';
  const blogText = resolvedData?.page?.metafields?.[1]?.value || 'Default content for the blog text';
  const imageUrl = resolvedData?.page?.metafields?.[2]?.reference?.image?.url || null;
  const bannerTitle = resolvedData?.page?.metafields?.[3]?.value || 'Default Title';
  const bannerButtonTitle = resolvedData?.page?.metafields?.[4]?.value || 'Default Title';

  // Banner Background Vectors
  const vector_img_1 = resolvedData?.page?.metafields?.[5]?.reference?.image?.url || null;
  const vector_img_2 = resolvedData?.page?.metafields?.[6]?.reference?.image?.url || null;
  const vector_img_3 = resolvedData?.page?.metafields?.[7]?.reference?.image?.url || null;

  const handleButtonClick = () => {
    window.location.href = '/account/login?return_to=/account/register';
  };

  const heroContainerRef = useRef(null);

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (heroContainerRef.current) {
        if (imageUrl && !window.matchMedia('(max-width: 768px)').matches) {
          // For screens wider than 768px (desktop)
          heroContainerRef.current.style.backgroundImage = `url(${imageUrl})`;
          heroContainerRef.current.style.backgroundSize = 'contain';
          heroContainerRef.current.style.backgroundRepeat = 'no-repeat';
          heroContainerRef.current.style.backgroundPosition = 'right';
        } else {
          // For mobile screens
          heroContainerRef.current.style.backgroundImage = 'none';
        }
      }
    };
  
    // Initial update
    updateBackgroundImage();
  
    // Add an event listener to handle window resize
    const handleResize = () => updateBackgroundImage();
    window.addEventListener('resize', handleResize);
  
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [imageUrl]);  

  return (
    <>  
      <div className="guest-landing-page--container hero-section">
        <img className='object1' src={vector_img_3} alt="object1" />
        <img className='object2' src={vector_img_2} alt="object2" />
        <img className='object3' src={vector_img_1} alt="object3" />
        <div className='hero-container'>
          <section className="flex justify-start items-center">
            <div className="content-box mt-[100px] md:mt-[80px]">
              <h1 className="!m-0 text-4xl font-bold !mb-[32px] hero-title">{bannerTitle}</h1>
              <button 
                className="cta-button w-[390px] h-[56px] bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-500 mb-0 md:mb-4 cursor-pointer"
                onClick={handleButtonClick}
              >
                {bannerButtonTitle}
              </button>
              <p id="registration-buttons-banner" className="text-white flex justify-center sm:justify-start items-center gap-x-3 text-center sm:text-left font-normal text-sm text-[14px] tracking-[0.04rem]">
                Already Registered?
                <span className="font-bold text-[17px] tracking-[0.02rem] underline underline-offset-8">
                  <a href="/account/login?return_to=/account/orders" className="text-white underline !text-white">Log In Here</a>
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className='main-blog'>
        <div 
          className='hero-container flex lg:flex-row flex-col items-center' 
          ref={heroContainerRef}
        >
          <div className='blog-left'>
            <h2 className='blog-heading'>{title}</h2>
            <p className='blog-text' dangerouslySetInnerHTML={{ __html: blogText }}></p>
          </div>
          
        </div>

        {imageUrl && (
            <div className='mobile-image-container'>
              <img src={imageUrl} alt="Metafield Image" className="mobile-image" />
            </div>
          )}

      </div>
    </>
  );
}

export default GuestLandingJSX;
