import React,{useState,useEffect} from "react";
import { useAuth } from "../../Providers/AuthContext";
import axios from "axios";
import { toast } from 'react-toastify';
import { GET_USER_ADDRESSES } from "../../api/config";

const MyAddresses = () => {
  const { user } = useAuth();
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      if (!user?.id) return;

      try {
        const res = await axios.get(GET_USER_ADDRESSES(user.id));
        setAddresses(res.data);
      } catch (err) {
        console.error("Error fetching addresses", err);
        toast.error("Failed to fetch addresses.");
      }
    };

    fetchAddresses();
  }, [user?.id]);

  return (
    <div className="bg-white p-6 rounded shadow-md w-1/2">
      <h2 className="text-lg font-semibold mb-6">My Addresses</h2>

      {addresses.length > 0 ? (
        <div className="space-y-4">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className="p-4 border border-gray-200 rounded shadow hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-md font-semibold text-primary">
                  {addr.type} Address
                </h3>
              </div>
              <p className="text-sm text-gray-600">📍 {addr.addressLine}</p>
              <p className="text-sm text-gray-600">📮 {addr.pincode}</p>
              <p className="text-sm text-gray-600">📞 {addr.phone}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          No addresses found. Please add an address.
        </p>
      )}
    </div>
  );
};

export default MyAddresses;
