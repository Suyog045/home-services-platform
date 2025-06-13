import React from 'react'

const AboutUsMain = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='flex flex-col md:flex-row justify-center mt-10 md:mx-30 flex flex-col w-3/4 gap-8'>
                <div className='md:mt-4  justify-center  '>
                    <div className='text-wrap text-center md:text-left  text-black text-3xl font-semibold p-10 flex flex-col md:items-start items-center'>
                        Your Trusted Partner for<br />
                        Home Services & Repairs
                        <div className="w-30 h-1 bg-secondary rounded-4xl mx-1 mt-3" />
                    </div>
                    <div className='flex text-wrap md:w-3/4 text-center md:text-left md:ml-10 '>
                        At [Your Brand Name], we believe your home
                        deserves the best care. Whether it's fixing a
                        leaky faucet, deep cleaning your living space, or
                        tackling electrical and appliance issues — we
                        bring professional, reliable, and affordable
                        solutions right to your doorstep.

                    </div>
                </div>

                <div className=' '>
                    <img src="/images/cleaning.jpg" alt="" className="rounded  w-350" />
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:justify-between mt-10 md:mx-30 flex flex-col w-3/4 md:gap-8'>
                <div className='md:p-2 mb-10 md:ml-15'>
                    <img src="\images\background.png" alt="" className="rounded w-350 " />
                </div>

                <div className=' md:mt-4 md:ml-35 '>
                    <div className=' md:text-nowrap text-center md:text-2xl  text-black text-3xl font-semibold   p-4 md:p-10 flex flex-col md:items-start items-center'>
                        Who We Are ?
                        <div className="w-17 h-1 bg-secondary rounded-4xl mx-1 mt-2" />
                    </div>
                    <div className='flex text-wrap text-center  mb-12 md:mb-0 md:text-left md:ml-10'>
                        We are a passionate team of skilled
                        professionals, technicians, and support staff
                        committed to simplifying your daily life. With a
                        focus on quality, safety, and customer
                        satisfaction, we aim to become your one-stop
                        destination for all home service needs.
          
                    </div>
                </div>
            </div>

        </div>
    )
}



export default AboutUsMain