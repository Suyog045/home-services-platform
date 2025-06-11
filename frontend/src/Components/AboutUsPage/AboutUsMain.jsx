import React from 'react'

const AboutUsMain = () => {
    return (
        <div className='main div'>
            <div className='flex flex-col md:flex-row justify-center md:justify-around'>
                <div className='md:mt-4'>
                    <div className='md:text-nowrap text-center md:text-left  text-black text-3xl font-semibold p-10 flex flex-col md:items-start items-center'>
                        Your Trusted Partner for<br />
                        Home Services & Repairs
                        <div className="w-30 h-1 bg-secondary rounded-4xl mx-1 mt-3" />
                    </div>
                    <div className='flex text-center md:text-left md:p-10 md:font-normal mt-2 md:-mt-12 '>
                        At [Your Brand Name], we believe your home <br />
                        deserves the best care. Whether it's fixing a <br />
                        leaky faucet, deep cleaning your living space, or<br />
                        tackling electrical and appliance issues — we<br />
                        bring professional, reliable, and affordable<br />
                        solutions right to your doorstep.

                    </div>
                </div>
                <div className='md:p-2 mt-10 '>
                    <img src="/images/cleaning.jpg" alt="" className="rounded  w-120" />
                </div>
            </div>
            <div className='grid grid-flow-col md: justify-items-center-safe'>
                <div className='md:p-2 mb-10'>
                    <img src="\images\background.png" alt="" className="rounded w-120 " />
                </div>
                <div className='md:mt-15'>
                    <div className=' md:text-nowrap md:text-3xl  text-black font-semibold p-10'>
                        Who We Are ?
                        <div className="w-22 h-1 bg-secondary rounded-4xl mx-1 mt-3" />
                    </div>
                    <div className='flex justify-left md:p-10 md:font-normal -mt-12'>
                        We are a passionate team of skilled<br />
                        professionals, technicians, and support staff<br />
                        committed to simplifying your daily life. With a<br />
                        focus on quality, safety, and customer<br />
                        satisfaction, we aim to become your one-stop<br />
                        destination for all home service needs.

                    </div>
                </div>
            </div>

        </div>
    )
}



export default AboutUsMain