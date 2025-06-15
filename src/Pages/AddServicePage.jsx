import React, { useContext, useState } from "react";
import { Form, useNavigate } from "react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../Contex/AuthProvider";
import axios from "axios";

const AddServicePage = () => {
  const { user } = useContext(AuthContext);
  const [addedDate] = useState(new Date().toISOString().split("T")[0]);
  const navigate = useNavigate();

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;

    const service = {
      serviceImage: form.serviceImage.value,
      serviceTitle: form.serviceTitle.value,
      companyName: form.companyName.value,
      website: form.website.value,
      description: form.description.value,
      category: form.category.value,
      price: form.price.value,
      addedDate: addedDate,
      userEmail: user?.email || "Anonymous",
    };

    axios
      .post("http://localhost:3000/services", service , { withCredentials: true })
      .then((response) => {
        console.log("Service added successfully:", response.data);
        Swal.fire({
          title: "Service Added Successfully!",
          icon: "success",
        });
        form.reset();
        navigate("/allservices");
      })
      .catch((error) => {
        console.error("Error adding service:", error.response?.data);
        Swal.fire({
          title: "Failed to add service!",
          text: error.response?.data?.message,
          icon: "error",
        });
      });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Add Service | Qview</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 mt-20 poppins">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
          <h2 className="text-2xl font-semibold text-center primary-color mb-6">
            Add New Service
          </h2>
          <Form onSubmit={handleAddService} className="space-y-4">
            <input
              type="text"
              name="serviceImage"
              placeholder="Service Image URL"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="serviceTitle"
              placeholder="Service Title"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="website"
              placeholder="Company Website"
              className="w-full px-4 py-2 border rounded-md"
            />
            <textarea
              name="description"
              placeholder="Service Description"
              className="w-full px-4 py-2 border rounded-md"
              required
            ></textarea>

            {/* Updated Category Dropdown */}
            <select
              name="category"
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">Select Category</option>
              <option value="Templates">Templates</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Stock Photos">Stock Photos</option>
              <option value="E-book">E-book</option>
              <option value="WordPress Plugins">WordPress Plugins</option>
              <option value="Online Course">Online Course</option>
              <option value="UI Kit">UI Kit</option>
              <option value="Design Service">Design Service</option>
              <option value="SaaS Tool">SaaS Tool</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Photography">Photography</option>
            </select>

            <input
              type="number"
              name="price"
              placeholder="Price"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <input
              type="text"
              value={addedDate}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-500"
            />
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-primary-color text-white rounded-md hover:bg-purple-700 transition duration-200"
            >
              Add Service
            </button>
          </Form>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default AddServicePage;
