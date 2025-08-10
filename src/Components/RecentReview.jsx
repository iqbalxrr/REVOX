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
  const limit = 15;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://assigenment-a11-server.vercel.app/reviews?page=${page}&limit=${limit}`)
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
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
          className={`text-base md:text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          aria-label={i < rating ? "Filled star" : "Empty star"}
        />
      ))}
    </div>
  );

  if (loading) return <Loader />;

  return (
    <section className="container mx-auto px-4  py-16">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-16 mont-font"
      >
        Recent <span className="primary-color">reviews</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {reviews.map((review, index) => (
          <motion.article
            key={review._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            aria-label={`Review by ${review.displayName || "Anonymous"}`}
          >
            <header className="flex items-center gap-4 mb-3">
              <img
                src={review.photoURL || "https://via.placeholder.com/40"}
                alt={review.displayName || "Anonymous"}
                className="w-10 h-10 rounded-full object-cover border-2 border-[#0077B6]"
              />
              <div>
                <p className="font-semibold text-gray-800 text-base">
                  {review.displayName || "Anonymous"}
                </p>
                <time className="text-gray-500 text-sm" dateTime={review.date}>
                  {new Date(review.date).toLocaleDateString()}
                </time>
              </div>
            </header>

            <div className="mb-4">{renderStars(review.rating)}</div>

            <p className="text-gray-700 text-sm line-clamp-4 mb-4">
              {review.text}
            </p>

            <footer>
              <p className="text-[#0077B6] font-semibold text-sm truncate" title={review.serviceTitle}>
                {review.serviceTitle || "Unknown Service"}
              </p>
            </footer>
          </motion.article>
        ))}
      </div>

      {/* Pagination */}
      <nav
        aria-label="Reviews Pagination"
        className="flex justify-center items-center gap-6 mt-12"
      >
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
          aria-label="Previous Page"
        >
          <FcPrevious size={26} />
        </button>
        <span className="text-gray-700 font-semibold select-none">Page {page + 1}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={reviews.length < limit}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
          aria-label="Next Page"
        >
          <FcNext size={26} />
        </button>
      </nav>
    </section>
  );
};

export default RecentReview;
