import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";
import Loader from "./Loader";
import { motion } from "framer-motion";

const RecentReview = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const limit = 10;

  useEffect(() => {
    setLoading(true); // ✅ move this at the start
    axios
      .get(`https://assigenment-a11-server.vercel.app/reviews?page=${page}&limit=${limit}`)
      .then((res) => {
        setReviews(res.data);
        setLoading(false); // ✅ stop loading after data is set
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [page]);

  const renderStars = (rating) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`text-sm ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
        />
      ))}
    </div>
  );

  if (loading) return <Loader />; // ✅ fix condition

  return (
    <div className="px-5 container mx-auto p-4">
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-center my-20 mont-font"
      >
        Recent <span className="primary-color">reviews</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {reviews.map((review, index) => (
          <motion.div
            key={review._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.8, delay: index * 0.6, ease: "easeOut" }}
            className="bg-white shadow-sm rounded-xl p-4 flex flex-col justify-between h-full"
          >
            <div className="flex items-center gap-3 mb-2">
              <img
                src={review.photoURL}
                alt={review.displayName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">
                  {review.displayName || "Anonymous"}
                </p>
                <p>{review.date}</p>
              </div>
            </div>
            {renderStars(review.rating)}
            <p className="text-sm text-gray-700 line-clamp-4">{review.text}</p>
            <div className="mt-4 border-t border-gray-200 pt-2 flex items-center gap-2">
              <div>
                <p className="text-sm font-medium">
                  {review.serviceTitle || "Unknown Service"}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-20">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          className="px-2 py-2 border border-blue-400 text-black rounded-full hover:bg-gray-300 disabled:opacity-30"
          disabled={page === 0}
        >
          <FcPrevious size={30} />
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page * limit >= reviews.length}
          className="px-2 py-2 border border-blue-400 text-black rounded-full hover:bg-gray-300 disabled:opacity-30"
        >
          <FcNext size={30} />
        </button>
      </div>
    </div>
  );
};

export default RecentReview;
