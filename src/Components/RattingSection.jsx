import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import Rating from "react-rating";
import { AuthContext } from "../Contex/AuthProvider";
import { useNavigate } from "react-router";

const RattingSection = ({ reatingId , serviceTitle}) => {
  const { user } = useContext(AuthContext);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const navigate = useNavigate();

  // console.log("Ratting Section reatingId:", reatingId);
  useEffect(() => {
    axios
      .get(`https://assigenment-a11-server.vercel.app/allreviews/${reatingId}`)
      .then((response) => {
        setReviews(response.data);
        console.log("Reviews fetched successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error.response?.data);
      });
  }, [reatingId]);

  const handleSubmit = () => {
    const newReview = {
      text: reviewText,
      rating,
      serviceTitle,
      photoURL: user?.photoURL,
      email: user?.email,
      displayName: user?.displayName,
      reatingId,
      date: new Date().toLocaleDateString("en-GB"),
    };
    // console.log("New Review:", newReview);

    axios
      .post("https://assigenment-a11-server.vercel.app/reviews", newReview , { withCredentials: true })
      .then((response) => {
        console.log("Review added successfully:", response.data);

        // ✅ Update state immediately
        setReviews([newReview, ...reviews]);
        setReviewText("");
        setRating(0);
        document.getElementById("my_modal_3").close();
      })
      .catch((error) => {
        console.error("Error adding review:", error.response?.data);
      });
  };


  const handelmodal = () => {
    if (!user) {
      navigate("/signin");
      return;
    }
    document.getElementById("my_modal_3").showModal();

  }

  return (
    <div className="">
      <div className="flex flex-col  md:flex-row justify-between my-5">
        <h2 className="text-2xl lg:text-4xl font-bold ">
          See what reviewers are saying
        </h2>

        <h2 className="text-base">Total review({reviews.length}) </h2>
      </div>
      <div>
        { reviews.map((review, index) => (
          <div
            key={index}
            className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={review.photoURL}
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{review.displayName}</h2>
                <p className="text-sm text-gray-500">Date: {review.date}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-1">
              Rating: {review.rating}/5 ⭐ 
            </p>
            <p className="text-gray-800 overflow-x-hidden">{review.text}</p>
          </div>
        ))}
      </div>

      <hr />

      <button
        className=" flex items-center gap-2 bg-blue-500 mt-5 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition"
        onClick={handelmodal}
      >
        {" "}
        <FaRegPenToSquare /> <span>Add Review</span>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="space-y-4 my-5">
            <h2 className="text-xl font-semibold">Add a Review</h2>

            <div className="flex items-center gap-3">
              <Rating
                emptySymbol={
                  <FaRegStar size={30} className="text-yellow-400" />
                }
                fullSymbol={<FaStar size={30} className="text-yellow-500" />}
                initialRating={rating}
                onChange={(rate) => setRating(rate)}
              />
              <span className="text-sm text-gray-500">({rating} Star)</span>
            </div>

            <div className="space-y-3">
              <textarea
                rows={4}
                className=" w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 resize-none"
                placeholder="Write your review here..."
                value={reviewText}
                required
                onChange={(e) => setReviewText(e.target.value)}
              />
              <br />
              <button
                onClick={handleSubmit}
                className="bg-blue-600  hover:bg-blue-700 text-white px-5 py-2 rounded-md transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default RattingSection;
