import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";

import Swal from "sweetalert2";
import Loader from "../Components/Loader";
import { AuthContext } from "../Contex/AuthProvider";
import axios from "axios";
import UpdateModal from "../Components/UpdateModal";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MyServicesPage = () => {
  const { user } = useContext(AuthContext);

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [updateServiceid, setUpdateServiceid] = useState("");
  const [updateService, setUpdateService] = useState({});

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://assigenment-a11-server.vercel.app/myservices?email=${user.email}`,
          { withCredentials: true }
        )
        .then((response) => {
          setServices(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching services:", error);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const HandalDeleteServices = (id) => {
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
            `https://assigenment-a11-server.vercel.app/services/delete/${id}`,
            {
              data: { email: user?.email },
              withCredentials: true,
            }
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const remaining = services.filter(
                (service) => service._id !== id
              );
              setServices(remaining);
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
        <title>My Services | Revox</title>
      </Helmet>
      <div className="px-4 py-20 container mx-auto  min-h-[70vh] ">
        <h1 className="text-3xl md:text-4xl font-bold text-center my-20 mont-font ">
          My <span className="primary-color">Services</span>
        </h1>

        <div className="overflow-x-auto w-full border  md:border-none">
          <div className="min-w-[600px] max-w-6xl mx-auto  border ">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-primary-color text-white">
                <tr>
                  <th className="px-4 py-2 ">Service Photo</th>
                  <th className="px-4 py-2 ">Service Name</th>
                  <th className="px-4 py-2 ">company Name</th>
                  <th className="px-4 py-2 ">Category</th>
                  <th className="px-4 py-2 ">Price</th>
                  <th className="px-4 py-2 ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service._id} className="text-center ">
                    <td className="px-4 py-4 border-b-2 border-gray-300 ">
                      <img
                        src={service.serviceImage}
                        alt=""
                        className="w-10 h-10 rounded mx-auto"
                      />
                    </td>
                    <td className="px-4 py-4 border-b-2 border-gray-300">
                      {service.serviceTitle}
                    </td>
                    <td className="px-4 py-4 border-b-2 border-gray-300">
                      {service.companyName}
                    </td>
                    <td className="px-4 py-4 border-b-2 border-gray-300">
                      {service.category}
                    </td>
                    <td className="px-4 py-4 border-b-2 border-gray-300">
                      {service.price} USDT
                    </td>
                    <td className="px-2 py-4 border-b-2 border-gray-300 ">
                      <Link
                        onClick={() => {
                          document.getElementById("my_modal_3").showModal();
                          setUpdateServiceid(service._id);
                          setUpdateService(service);
                        }}
                        //   to={`/services/update/${service._id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded mx-2"
                      >
                        Update
                      </Link>

                      <Link
                        onClick={() => HandalDeleteServices(service._id)}
                        className="bg-red-500 hover:bg-red-600  text-white px-4 py-1 rounded"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
                {services.length === 0 && (
                  <tr>
                    <td colSpan="4" className="py-8 text-center text-gray-500">
                      No services found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            <UpdateModal
              updateServiceid={updateServiceid}
              updateService={updateService}
            />
          </div>
        </dialog>
      </div>
    </HelmetProvider>
  );
};

export default MyServicesPage;
