import React, { useEffect, useState } from "react";
import { useAuth } from "../../Providers/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getOrdersByUserId } from "../../api/Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrdersByUserId(user.id, user.token);
        setOrders(response);
      } catch (error) {
        console.error("Error fetching orders:", error);
        toast.error("Failed to fetch orders.");
      }
    };

    if (user?.id) {
      fetchOrders();
    }
  }, [user]);

  const upcomingOrders = orders.filter(order => order.orderStatus === "CONFIRMED");

  return (
    <div className="bg-white p-6 rounded w-full max-w-4xl mx-auto shadow">
      <h2 className="text-lg font-semibold mb-6 text-center sm:text-left">
        Upcoming Orders
      </h2>

      {upcomingOrders.length === 0 ? (
        <p className="text-center text-gray-500">No upcoming orders.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-3 text-sm font-medium text-gray-600 sr-only">Order ID</th>
                <th className="p-3 text-sm font-medium text-gray-600">Service</th>
                <th className="p-3 text-sm font-medium text-gray-600">Date</th>
                <th className="p-3 text-sm font-medium text-gray-600">Time</th>
                <th className="p-3 text-sm font-medium text-gray-600">Address</th>
                <th className="p-3 text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {upcomingOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 text-sm">#{order.id}</td>
                  <td className="p-3 text-sm">{order.service}</td>
                  <td className="p-3 text-sm">{order.date}</td>
                  <td className="p-3 text-sm">{order.serviceTime}</td>
                  <td className="p-3 text-sm">{order.address}</td>
                  <td className="p-3 text-sm text-yellow-600 font-semibold">{order.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
