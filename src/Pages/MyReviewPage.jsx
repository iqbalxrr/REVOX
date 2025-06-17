import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contex/AuthProvider";
import axios from "axios";
import Loader from "../Components/Loader";
import Swal from "sweetalert2";
import MyReviewModal from "../Components/MyReviewModal";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MyReviewPage = () => {
     const { user } = useContext(AuthContext);
     const [myReviews , setMyReviews] = useState([]);
     const [loading, setLoading] = useState(true);
       const [updateReviewid , setUpdateReviewid ] = useState('')
     



    useEffect(() => {
        if (user?.email) {
           axios.get(`https://assigenment-a11-server.vercel.app/myreviews?email=${user?.email}`, { withCredentials: true })
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
    

   const HandalDeleteReviews = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://assigenment-a11-server.vercel.app/myreviews/delete/${id}`, {
            data: { email: user?.email },
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const remaining = myReviews.filter((review) => review._id !== id);
             setMyReviews(remaining);
              Swal.fire({
                title: "Deleted Successfully!",
                icon: "success",
                draggable: true,
              });
            }
          });
      }
    });
  };
     


if (loading) return <Loader />;


  return (
   <HelmetProvider>
    <Helmet>
      <title> My Reviews | Revox </title>
    </Helmet>
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
                <h1 className="text-xl font-semibold mb-2 mont-font primary-color">{review.serviceTitle}</h1>
                <p className="text-gray-500 mb-2 poppins">Rating: {review.rating}/5⭐  </p>
                <p className="text-gray-900 poppins overflow-hidden"> <span className="font-semibold">Review : </span> {review.text}</p>
              </div>
              <div className="mx-auto md:mx-0">
                <button
                onClick={() => {document.getElementById("my_modal_3").showModal(); setUpdateReviewid(review._id)}}
                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded mx-2">Update</button>
                <button
                onClick={() =>HandalDeleteReviews(review._id)}
                 className="bg-red-500 hover:bg-red-600  text-white px-4 py-1 rounded ">Delete</button>
              </div>
            </div>
          ))
        )
      }
   
   {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
     <MyReviewModal updateReviewid={updateReviewid} setMyReviews={setMyReviews} myReviews={myReviews} />
    
  </div>
</dialog>

    </div>
   </HelmetProvider>
  );
};

export default MyReviewPage;
