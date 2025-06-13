import React from 'react'

import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiRapidshareArrow } from "react-icons/gi";
import { FaDonate } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";


const AboutUsWhyUs = () => {
    return (
        <div className="bg-primary w-full pb-12">

            <div className="  text-white md:items-center text-center text-3xl font-bold p-5 flex justify-center items-center gap-2 flex-col">
                Why Choose us ?
                <div className="  w-20 h-1.5 md:mr-37 bg-secondary rounded-4xl " />
            </div>

            <div className='mt-13'>
                <div className='flex justify-center md:flex-row flex-col items-center gap-8 md:gap-35'>

                    <div class=" max-w-sm border border-white rounded-full flex flex-col items-center text-wrap w-54 h-54 ">
                        <VscWorkspaceTrusted className='text-white mt-11 text-4xl' />
                        <div class="p-5 text-center">
                            <p class="mb-3 text-xl text-white font-normal  ">Trusted & Verified Professionals</p>
                        </div>
                    </div>


                    <div class=" max-w-sm border  border-white rounded-full flex flex-col items-center text-wrap w-54 h-54 ">
                        <GiRapidshareArrow className='text-white mt-11  text-4xl' />
                        <div class="p-5 text-center">
                            <p class="mb-3 text-xl text-white font-normal  ">Easy & Quick Booking</p>
                        </div>
                    </div>

                    <div class=" max-w-sm border  border-white rounded-full flex flex-col items-center text-wrap w-54 h-54 ">
                        <FaDonate className='text-white mt-11  text-4xl' />
                        <div class="p-5 text-center">
                            <p class="mb-3 mt-4 text-xl text-white font-normal  ">Transparent Pricing</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-13'>
                <div className='flex justify-center md:flex-row flex-col items-center gap-8 md:gap-35 '>
                    <div class=" max-w-sm border border-white rounded-full flex flex-col items-center text-wrap w-54 h-54 ">
                        <MdHomeRepairService className='text-white mt-11 text-4xl' />
                        <div class="p-5 text-center">
                            <p class="mb-3 text-xl text-white font-normal  ">Wide Range of Services</p>
                        </div>
                    </div>

                    <div class=" max-w-sm border border-white rounded-full flex flex-col items-center text-wrap w-54 h-54 ">
                        <RiContactsLine className='text-white mt-11 text-4xl' />
                        <div class="p-5 text-center">
                            <p class="mb-3 text-xl text-white font-normal  ">Fast Response & Emergency Services</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}



export default AboutUsWhyUs