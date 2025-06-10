import axios from "axios";
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const MyReviewModal = ({ updateReviewid , myReviews , setMyReviews }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
//   const [reviews, setReviews] = useState([]);



  const handleSubmit = () => {
    const newReview = {
      text: reviewText,
      rating,
    };
  

    axios
      .patch(`http://localhost:3000/myreviews/update/${updateReviewid}`, newReview)
      .then((response) => {

   const updatedReviews = myReviews.map((review) =>
    review._id === updateReviewid
      ? { ...review, text: reviewText, rating: rating }
      : review
  );

  setMyReviews(updatedReviews);
  setReviewText("");
  setRating(0);
  document.getElementById("my_modal_3").close();
      })
      .catch((error) => {
        console.error("Error adding review:", error.response?.data);
      });
  };

  
  return (
    <div>
      <div className="space-y-4 my-5">
        <h2 className="text-xl font-semibold">Update Review</h2>

        <div className="flex items-center gap-3">
          <Rating
            emptySymbol={<FaRegStar size={30} className="text-yellow-400" />}
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
  );
};

export default MyReviewModal;
