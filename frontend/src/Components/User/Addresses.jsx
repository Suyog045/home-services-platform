import React, { useState, useEffect } from "react";
import { useAuth } from "../../Providers/AuthContext";
import axios from "axios";
import {  ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserAddresses } from "../../api/User";
import { CREATE_USER_ADDRESS, UPDATE_USER_ADDRESS, DELETE_USER_ADDRESS } from "../../api/config";

const MyAddresses = () => {
  const { user } = useAuth();
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [newAddress, setNewAddress] = useState({
    address: "",
    pincode: "",
    city: "",
    state: "",
  });

  const fetchAddresses = async () => {
    if (!user?.id) return;
    try {
      const res = await getUserAddresses(user.id);
      setAddresses(res);
    } catch (err) {
      console.error("Error fetching addresses", err);
      toast.error("Failed to fetch addresses.");
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, [user?.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const { address, pincode, city, state } = newAddress;
    if (!address || !pincode || !city || !state) {
      toast.warn("Please fill in all fields.");
      return;
    }

    try {
      if (editingAddressId) {
        await axios.put(UPDATE_USER_ADDRESS(user.id, editingAddressId), newAddress);
        toast.success("Address updated successfully!");
      } else {
        await axios.post(CREATE_USER_ADDRESS(user.id), newAddress);
        toast.success("Address added successfully!");
      }
      setNewAddress({ address: "", pincode: "", city: "", state: "" });
      setEditingAddressId(null);
      setShowForm(false);
      fetchAddresses();
    } catch (error) {
      console.error("Error saving address:", error);
      toast.error("Failed to save address.");
    }
  };

  const handleEdit = (addr) => {
    setNewAddress(addr);
    setEditingAddressId(addr.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(DELETE_USER_ADDRESS(user.id, id));
      toast.success("Address deleted successfully!");
      fetchAddresses();
    } catch (err) {
      console.error("Error deleting address", err);
      toast.error("Failed to delete address.");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md  w-full max-w-2xl mx-auto">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-lg font-semibold">My Addresses</h2>
        <button
          className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-secondary-hover cursor-pointer transition"
          onClick={() => {
            setNewAddress({ address: "", pincode: "", city: "", state: "" });
            setEditingAddressId(null);
            setShowForm(true);
          }}
        >
          Add Address
        </button>
      </div>

      {showForm && (
        <div className="mb-6 space-y-3">
          <input
            name="address"
            placeholder="Address"
            value={newAddress.address}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            name="city"
            placeholder="City"
            value={newAddress.city}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            name="pincode"
            placeholder="Pincode"
            value={newAddress.pincode}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            name="state"
            placeholder="State"
            value={newAddress.state}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <button
            className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-secondary-hover cursor-pointer"
            onClick={handleSubmit}
          >
            {editingAddressId ? "Update Address" : "Save Address"}
          </button>
        </div>
      )}

      {addresses.length > 0 ? (
        <div className="space-y-4">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className="p-4 border border-gray-200 rounded shadow hover:shadow-md transition"
            >
              <p className="text-sm text-gray-600">📍 {addr.address}</p>
              <p className="text-sm text-gray-600">📮 {addr.pincode}</p>
              <p className="text-sm text-gray-600">🏙️ {addr.city}</p>
              <p className="text-sm text-gray-600">🗺️ {addr.state}</p>
              <div className="flex gap-2 mt-2">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full cursor-pointer"
                  onClick={() => handleEdit(addr)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full cursor-pointer"
                  onClick={() => handleDelete(addr.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No addresses found. Please add an address.</p>
      )}
    </div>
  );
};

export default MyAddresses;
