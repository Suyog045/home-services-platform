import React from "react";

const PartnerProfileSummary = ({dummyServiceProvider}) => {
  
  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-4 mb-5">
      <h1 className="text-2xl font-medium">Profile Summary</h1>
      <div className="h-44 w-full shadow-md rounded-md flex p-10 gap-4 justify-center items-center">
        <div>
          <img src={dummyServiceProvider.profilePicture} alt="" className="w-24" />
        </div>
        <div className="flex-1">
        <h2 className="text-xl font-semibold">{dummyServiceProvider.name}</h2>
        <p className="text-gray-600 text-sm">
          Rating : {dummyServiceProvider.rating}
        </p>
        <div className="flex justify-between">
            <p>Years Of Experience : {dummyServiceProvider.experience}</p>
            <p>Location : {dummyServiceProvider.location.city}</p>
            <p>Total Reviews : {dummyServiceProvider.totalReviews}</p>
        </div>
      </div>
      </div>
      <div className="w-full shadow-md rounded-md h-60 p-5 flex flex-col gap-2">
        <div className="text-xl font-medium">Reviews</div>
        {
            dummyServiceProvider.feedbacks.map((feedback)=>(
                <div>
            <p>{feedback.user}</p>
            <p className="font-light">{feedback.comment}</p>
        </div>
            ))
        }
      </div>
    </div>
  );
};

export default PartnerProfileSummary;
