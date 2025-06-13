import React from 'react'

const AboutUsTag = () => {
    return (
        <div className=' p-5  md:mx-30 mt-10 flex md:flex-row flex-col items-center  gap-8 md:gap-34  '>
           
                <div className='flex flex-col gap-2 w-3/4 md:justify-center md:items-start items-center '>
                    <div className='text-wrap text-2xl text-center flex flex-col  items-center md:items-start md:text-left font-semibold '>
                        Let's Build a Better Home, Together
                        <div className="w-30 h-1  bg-secondary rounded-4xl md:mx-1 mt-2" />
                    </div>

                    <div className=' text-wrap  text-center md:text-left mt-4'>
                        We’re more than a service platform — we’re your home 
                        partner. Join thousands of happy customers who trust
                        us to keep their homes running smoothly.
                    </div>

                </div>
                
                    <img src="/images/cleaning.jpg" alt="" className="rounded w-100 " />
                
       

        </div>
    )
}



export default AboutUsTag