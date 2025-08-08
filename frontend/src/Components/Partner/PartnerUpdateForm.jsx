import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatePartner, getPartnerById } from "../../api/Partner";
import { usePartnerAuth } from "../../Providers/PartnerAuthContext";
import { toast } from "react-toastify";
import { getAllCategories } from "../../api/CatalogService";
import "react-toastify/dist/ReactToastify.css";
import { FaSignOutAlt } from "react-icons/fa";
import { Label, Select } from "flowbite-react";

const PartnerUpdateForm = () => {
  const { partner: loggedInPartner, logout: partnerLogout } = usePartnerAuth();
  const navigate = useNavigate();
  const [partner, setPartner] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!loggedInPartner?.id) return;

    const fetchPartner = async () => {
      try {
        const data = await getPartnerById(loggedInPartner.id);
        setPartner({
          ...data,
          categoryId: data?.category?.id || "",
          address: {
            address: data?.myAddress?.address || "",
            city: data?.myAddress?.city || "",
            state: data?.myAddress?.state || "",
            pincode: data?.myAddress?.pincode || "",
            country: data?.myAddress?.country || "",
          },
        });
      } catch (error) {
        toast.error("Failed to fetch partner details");
      }
    };

    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        toast.error("Failed to fetch categories");
      }
    };

    fetchPartner();
    fetchCategories();
  }, [loggedInPartner?.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPartner((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setPartner((prev) => ({
      ...prev,
      address: { ...prev.address, [name]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!partner.categoryId) {
      toast.error("Please select a category.");
      return;
    }
    try {
      const payload = {
        birthDate: partner.birthDate,
        experience: partner.experience,
        categoryId: partner.categoryId,
        myAddress: {
          address: partner.address.address,
          city: partner.address.city,
          state: partner.address.state,
          pincode: partner.address.pincode,
          country: partner.address.country,
        },
      };
      await updatePartner(loggedInPartner.id, payload);
      toast.success("Profile updated successfully!");
      navigate("/partner/dashboard");
    } catch (error) {
      toast.error("Failed to update profile. Please check your inputs.");
    }
  };

  const handleLogout = () => {
    partnerLogout();
    navigate("/partner");
    toast.success("Logged out successfully");
  };

  if (!partner) {
    return <div className="text-center mt-10">Loading partner details...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1
          className="text-xl font-bold text-primary cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home<span className="text-secondary">Mate</span>
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-secondary text-white px-4 py-2 hover:bg-secondary-hover transition cursor-pointer rounded-lg"
        >
          <FaSignOutAlt />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </header>

      <main className="p-6">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Update Your Profile
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* CORRECTED READ-ONLY FIELDS */}
            {["firstName", "lastName", "email", "phoneNumber"].map((field) => (
              <div key={field}>
                <label className="block mb-1 font-medium capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  name={field}
                  // THE FIX IS HERE: Use '|| ""' as a fallback for null/undefined
                  value={partner[field] || ""} 
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                />
              </div>
            ))}

            <div>
              <label className="block mb-1 font-medium">Birth Date</label>
              <input
                type="date"
                name="birthDate"
                value={partner.birthDate || ""}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Experience (Years)</label>
              <input
                type="number"
                name="experience"
                value={partner.experience || ""}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* CORRECTED FLOWBITE SELECT */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="categoryId" value="Category" />
              </div>
              <Select
                id="categoryId"
                name="categoryId"
                value={partner.categoryId}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                {/* Ensure you are using the correct property name from your API */}
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} {/* Corrected from cat.categoryName if needed */}
                  </option>
                ))}
              </Select>
            </div>

            {/* Address Fields */}
            {["address", "city", "state", "pincode", "country"].map((field) => (
              <div key={field}>
                <label className="block mb-1 font-medium capitalize">
                  {field}
                </label>
                <input
                  type="text"
                  name={field}
                  value={partner.address?.[field] || ""}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            ))}

            <div className="col-span-1 md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PartnerUpdateForm;