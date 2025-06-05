
import React, { useContext, useState } from "react";
import { Form } from "react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../Contex/AuthProvider";

const AddServicePage = () => {
  const { user } = useContext(AuthContext);
  const [addedDate] = useState(new Date().toISOString().split("T")[0]);

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;

    const service = {
      serviceImage: form.serviceImage.files[0]?.name || "",
      serviceTitle: form.serviceTitle.value,
      companyName: form.companyName.value,
      website: form.website.value,
      description: form.description.value,
      category: form.category.value,
      price: form.price.value,
      addedDate: addedDate,
      userEmail: user?.email || "Anonymous",
    };

    console.log("Submitted Service:", service);

    // Submit to backend here...

    Swal.fire({
      title: "Service Added Successfully!",
      icon: "success",
    });

    form.reset();
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Add Service | Qview</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center primary-color mb-6">
            Add New Service
          </h2>
          <Form onSubmit={handleAddService} className="space-y-4">
            <input
              type="file"
              name="serviceImage"
              accept="image/*"
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
              type="url"
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
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
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
