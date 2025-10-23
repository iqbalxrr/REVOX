
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contex/AuthProvider";
import axios from "axios";
import Loader from "../Components/Loader";
import Swal from "sweetalert2";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MyBookmarkPage = () => {
  const { user } = useContext(AuthContext);
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch bookmarks
  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://assigenment-a11-server.vercel.app/mybookmarks?email=${user.email}`,
          { withCredentials: true }
        )
        .then((res) => {
          setBookmarks(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching bookmarks:", err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  // Delete bookmark
  const handleDeleteBookmark = (id) => {
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
          .delete(
            `https://assigenment-a11-server.vercel.app/bookmarks/delete/${id}`,
            { data: { email: user.email }, withCredentials: true }
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const remaining = bookmarks.filter((b) => b._id !== id);
              setBookmarks(remaining);
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
        <title>My Bookmarks | Revox</title>
      </Helmet>
      <div className="px-4 py-20 container mx-auto min-h-[70vh]">
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-20 mb-10 mont-font">
          My <span className="primary-color">Bookmarks</span>
        </h1>

        {bookmarks.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>You have not bookmarked any services yet.</p>
          </div>
        ) : (
          bookmarks.map((bookmark) => (
            <div
              key={bookmark._id}
              className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-4 rounded-lg shadow-md mb-5"
            >
              <div className="flex-1">
                <h1 className="text-xl font-semibold mb-2 mont-font primary-color">
                  {bookmark.serviceTitle}
                </h1>
                <p className="text-gray-500 mb-2 poppins">
                  Category: {bookmark.category}
                </p>
                <p className="text-gray-900 poppins overflow-hidden">
                  <span className="font-semibold">Price: </span>
                  {bookmark.price}$
                </p>
              </div>
              <div className="mx-auto md:mx-0">
                {/* delete features  */}
                <button
                  onClick={() => handleDeleteBookmark(bookmark._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </HelmetProvider>
  );
};

export default MyBookmarkPage;
