
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Contex/AuthProvider';

const UpdateModal = ({ updateServiceid , updateService }) => {
  const {user} = useContext(AuthContext);



    // console.log("Update Modal ID:", updateServiceid , updateService);

 const handleUppdateService = (event) => {
      event.preventDefault();
      const form = event.target;
      const serviceImage = form.serviceImage.value;
      const serviceTitle = form.serviceTitle.value;
      const companyName = form.companyName.value;
      const website = form.website.value;
      const description = form.description.value;
     const category = form.category.value;
     const price = form.price.value;
     const updateService = {
      serviceImage,
      serviceTitle,
      companyName,
      website,
      description,
      category,
      price,
      email: user?.email,
    };

    // console.log("Update Service Data:", updateService);

    axios.patch(`http://localhost:3000/updateservices/${updateServiceid}`, updateService , { withCredentials: true })
      .then((response) => {
        // console.log("Service updated successfully:", response.data);
        form.reset();
        document.getElementById("my_modal_3").close();
        alert("Service Updated Successfully");
      })
      .catch((error) => {
        // console.error("Error updating service:", error.response?.data);
        alert("Failed to update service: " + error.response?.data?.message);
      });



 }
 

    return (
        <div>
            <div className=" flex items-center justify-center poppins">
        <div className="  p-8 w-full max-w-2xl">
          <h2 className="text-2xl font-semibold text-center primary-color mb-6">
            Update Service
          </h2>
          <form onSubmit={handleUppdateService} className="space-y-4">
            <input
              type="text"
              name="serviceImage"
             defaultValue={updateService?.serviceImage || ""}
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
           
           
            <button
              type="submit"
              className="w-full py-2 bg-primary-color text-white rounded-md hover:bg-purple-700 transition duration-200"
            >
              Update Service
            </button>
          </form>
        </div>
      </div>
        </div>
    );
};

export default UpdateModal;