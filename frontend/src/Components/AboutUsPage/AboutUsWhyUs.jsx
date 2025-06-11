import React from 'react'
import { AiFillAudio } from "react-icons/ai";


const AboutUsWhyUs = () => {
    return (
        <div className="bg-primary h-200 w-full">
            <div className="  text-white  md:text-center md:text-3xl font-bold p-5">
                Why Choose us ?
                <div className="w-20 h-1.5 bg-secondary rounded-4xl mx-157 mt-2" />

                <div className='flex justify-center gap-25'>

                    <div class=" max-w-sm border rounded-full flex flex-col items-center text-wrap w-54 h-54 "> 
                       
                            {/* <img class="rounded-t-lg w-40 h-40 object-cover mt-10" src="/images/profile.png" alt="Profile Image" /> */}
                            <AiFillAudio className='text-white mt-11'/>
                        <div class="p-5 text-center">
                            <p class="mb-3 text-xl text-white font-normal  ">Trusted & Verified Professionals</p>
                        </div>
                    </div>

                    <div class="max-w-sm rounded-lg flex flex-col items-center text-wrap w-54"> 
                     
                            <img class="rounded-t-lg w-40 h-40 object-cover mt-10" src="/images/profile.png" alt="Profile Image" />
                      
                        <div class="p-5 text-center">
                            <p class="mb-3 text-xl text-white font-normal"> Easy & Quick Booking</p>
                        </div>
                    </div>

                   <div class="max-w-sm rounded-lg flex flex-col items-center text-wrap w-54"> 
                      
                            <img class="rounded-t-lg w-40 h-40 object-cover mt-10" src="/images/profile.png" alt="Profile Image" />
                  
                        <div class="p-5 text-center">
                            <p class="mb-3 text-xl text-white font-normal">Transparent Pricing</p>
                        </div>
                    </div>
                   


                </div>
                <div className='flex justify-center gap-25 '>

                    <div class="max-w-sm rounded-lg flex flex-col items-center text-wrap w-54"> 
                       
                            <img class="rounded-t-lg w-40 h-40 object-cover mt-10" src="/images/profile.png" alt="Profile Image" />
                    
                        <div class="p-5 text-center">
                            <p class="mb-3 text-xl text-white font-normal">Wide Range of Services</p>
                        </div>
                    </div>

                   <div class="max-w-sm rounded-lg flex flex-col items-center text-wrap w-54"> 
                     
                            <img class="rounded-t-lg w-40 h-40 object-cover mt-10" src="/images/profile.png" alt="Profile Image" />
                     
                        <div class="p-5 text-center">
                            <p class="mb-3 text-xl text-white font-normal">Fast Response & Emergency Services</p>
                        </div>
                    </div>

                  
                   


                </div>
            </div>

        </div>
    )
}



export default AboutUsWhyUs