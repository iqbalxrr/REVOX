import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contex/AuthProvider";
import axios from "axios";
import Loader from "../Components/Loader";

const MyReviewPage = () => {
     const { user } = useContext(AuthContext);
     const [myReviews , setMyReviews] = useState([]);
     const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (user?.email) {
           axios.get(`http://localhost:3000/myreviews?email=${user.email}`)
            .then((response) => {
              setMyReviews(response.data);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching services:", error);
              setLoading(false);
            });
    
        }   
      }, [user?.email]);
    

if (loading) return <Loader />;


  return (
    <div className="px-4 py-20 container mx-auto  min-h-[70vh]">
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-20 mb-10 mont-font ">
        My <span className="primary-color"> Reviews</span>
      </h1>


      {
        myReviews.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>You have not added any reviews yet.</p>
          </div>
        ) : (
          myReviews.map((review) => (
            <div key={review._id} className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-4 rounded-lg shadow-md mb-5">
              <div className="flex-1">
                <h1 className="text-xl font-semibold mb-2 mont-font">{review.serviceTitle}</h1>
                <p className="text-gray-500 mb-2 poppins">Rating: {review.rating}/5⭐  </p>
                <p className="text-gray-900 poppins"> <span className="font-semibold">Review : </span> {review.text}</p>
              </div>
              <div className="mx-auto md:mx-0">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded mx-2">Update</button>
                <button className="bg-red-500 hover:bg-red-600  text-white px-4 py-1 rounded ">Delete</button>
              </div>
            </div>
          ))
        )
      }
{/* 
     <div className="flex justify-between items-center gap-4 bg-white p-4 rounded-lg shadow-md mb-8">
        <div>
        <h1> Service Title, , </h1>
        <p>Rating</p>
        <p>Text Review</p>
     </div>
     <div>
        <button>Update</button>
        
        <button>Delete</button>
     </div>
     </div> */}

    </div>
  );
};

export default MyReviewPage;
