import React from 'react'
import image1 from "../../../assets/gallary/image1.png"
import image2 from "../../../assets/gallary/image2.png"

const Gallery = () => {
  return (
    <div className='md:w-[80%] mx-auto my-28'>
        <div className='mb-16'>
            <h1 className='text-5xl font-bold text-center'>Our Gallery</h1>
        </div>

        {/* image conatiner */}
        {/*
        <div className='md:grid grid-cols-2 items-center justify-center border gap-4'>
            <div className='mb-4 md:mb-0'>
                <img src={image1} alt="" className='md:h-[720px] w-full mx-auto rounded-sm' />
            </div>

            <div>
                <div>
                    <img src={image2} alt="" className='md:h-[350px] rounded-sm'/>
                </div>
                <div>
                    <img src={image2} alt="" className='md:h-[350px] rounded-sm'/>
                </div>
                <div>
                    <img src={image2} alt="" className='md:h-[350px] rounded-sm'/>
                </div>
                <div>
                    <img src={image2} alt="" className='md:h-[350px] rounded-sm'/>
                </div>
            </div>
        </div>
        */}

          <div className='grid md:grid-cols-2 gap-4'>
              <div className='mb-4 md:mb-0'>
                  <img src={image1} alt="" className='md:h-[600px] w-full mx-auto rounded-sm' />
              </div>

              <div className='grid grid-cols-2 gap-4'>
                  <img src={image2} alt="" className='h-[300px] w-full rounded-sm' />
                  <img src={image2} alt="" className='h-[300px] w-full rounded-sm' />
                  <img src={image2} alt="" className='h-[300px] w-full rounded-sm' />
                  <img src={image2} alt="" className='h-[300px] w-full rounded-sm' />
              </div>
          </div>


      </div>
  )
}

export default Gallery