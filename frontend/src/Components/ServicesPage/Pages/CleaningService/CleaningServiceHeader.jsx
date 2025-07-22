import React from 'react'

const CleaningServiceHeader = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-150 bg-white rounded-lg overflow-hidden justify-around items-center ">
  <div className="md:w-1/3 p-10 flex flex-col justify-center items-start bg-white">
    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Cleaning Services</h1>
    <p className="text-gray-600 mb-6">
      Subsidized housing programs, government schemes, and co-operative housing societies
      often provide more affordable options
    </p>
    <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-lg font-medium">
      Get your work done →
    </button>
  </div>

  <div className="h-full w-1/3 flex justify=center items-center">
    <div className="h-120 w-full bg-primary rounded-[100px] flex justify-center items-center mt-14">
        <img
            src="/images/cleaning-servicebg.png"
            alt="Cleaning Service"
            className="w-full h-full object-cover mr-54 rounded-tl-[100px] rounded-bl-[100px]"></img>
    </div>
  </div>
</div>
  )
}

export default CleaningServiceHeader
