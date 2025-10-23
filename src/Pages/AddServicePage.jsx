import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../Contex/AuthProvider"; 

const API_URL = "https://assigenment-a11-server.vercel.app/services";
const IMGBB_API_KEY = "YOUR_IMGBB_API_KEY_HERE"; // <-- ekhane tomaar Imgbb API key boshabe

const categoryOptions = [
  "Templates", "Mobile App", "Stock Photos", "E-book", 
  "WordPress Plugins", "Online Course", "UI Kit", "Design Service", 
  "SaaS Tool", "Freelancer", "Photography"
];

const AddServicePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    serviceImage: "",
    serviceTitle: "",
    companyName: "",
    website: "",
    description: "",
    category: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const addedDate = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // --- Handle image upload via Imgbb ---
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const form = new FormData();
    form.append("image", file);

    try {
      setLoading(true);
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        form
      );
      setFormData((prev) => ({ ...prev, serviceImage: res.data.data.url }));
      Swal.fire({
        title: "Image Uploaded ✅",
        text: "Your image has been uploaded successfully.",
        icon: "success",
        timer: 1200,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Upload Failed ❌",
        text: "Could not upload image. Try again.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const { serviceImage, serviceTitle, companyName, description, category, price } = formData;
    if (!serviceImage || !serviceTitle || !companyName || !description || !category || !price) {
      Swal.fire({ title: "Validation Error", text: "Please fill all fields.", icon: "warning" });
      return false;
    }
    try { new URL(serviceImage); } catch { Swal.fire({ title: "Validation Error", text: "Invalid Image URL.", icon: "warning" }); return false; }
    if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
      Swal.fire({ title: "Validation Error", text: "Price must be positive.", icon: "warning" });
      return false;
    }
    return true;
  };

  const handleAddService = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const servicePayload = { ...formData, price: parseFloat(formData.price), addedDate, userEmail: user?.email || "Anonymous" };

    try {
      const response = await axios.post(API_URL, servicePayload, { withCredentials: true });
      Swal.fire({ title: "Service Added Successfully! 🚀", icon: "success", timer: 1500, showConfirmButton: false });
      setFormData({ serviceImage: "", serviceTitle: "", companyName: "", website: "", description: "", category: "", price: "" });
      navigate("/allservices");
    } catch (error) {
      console.error(error);
      Swal.fire({ title: "Failed to add service ❌", text: error.response?.data?.message || "An error occurred.", icon: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <HelmetProvider>
      <Helmet><title>Add Service | Revox</title></Helmet>
      <div className="min-h-screen flex items-start justify-center bg-gray-50 p-4 pt-24 poppins">
        <div className="p-6 sm:p-10 w-full max-w-3xl transform transition-all duration-300 hover:shadow-3xl">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8 border-b pb-4">Create New Service 📝</h2>
          
          <form onSubmit={handleAddService} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Imgbb Upload */}
            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Upload Service Image</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              {formData.serviceImage && <img src={formData.serviceImage} alt="Preview" className="mt-2 w-40 h-40 object-cover rounded-lg shadow" />}
            </div>

            <Input label="Service Title" name="serviceTitle" type="text" value={formData.serviceTitle} onChange={handleChange} placeholder="Premium Web Design Package" required />
            <Input label="Company Name" name="companyName" type="text" value={formData.companyName} onChange={handleChange} placeholder="Revox Innovations" required />
            <Input label="Company Website" name="website" type="url" value={formData.website} onChange={handleChange} placeholder="Optional: https://yourcompany.com" />
            <Input label="Price" name="price" type="number" value={formData.price} onChange={handleChange} placeholder="99.99" min="0" step="0.01" required />

            <div className="flex flex-col">
              <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-1">Category</label>
              <select id="category" name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required>
                <option value="" disabled>Select a category</option>
                {categoryOptions.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            <div className="md:col-span-2 flex flex-col">
              <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Service details..." rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-y" required></textarea>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t mt-4">
              <ReadonlyInput label="Added Date" value={addedDate} />
              <ReadonlyInput label="User Email" value={user?.email || "Anonymous"} />
            </div>

            <div className="md:col-span-2">
              <button type="submit" disabled={loading} className={`w-full py-3 mt-4 text-white font-semibold rounded-lg ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'}`}>
                {loading ? "Processing..." : "Add Service"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
};

const Input = ({ label, name, type, value, onChange, placeholder, required, ...props }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input id={name} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required={required} {...props} />
  </div>
);

const ReadonlyInput = ({ label, value }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input type="text" value={value} readOnly className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed" />
  </div>
);

export default AddServicePage;
