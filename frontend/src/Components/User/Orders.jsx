import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../Providers/AuthContext";

import { cancelOrder, getOrdersByUserId } from "../../api/Order";
import { Button } from "flowbite-react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrdersByUserId(user.id);
        console.log("Fetched orders:", response);
        setOrders(response);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    if (user?.id) {
      fetchOrders();
    }
  }, [user]);

  const handleCancel = async (orderId) => {
    const confirm = window.confirm(
      "Are you sure you want to cancel this order?"
    );
    if (!confirm) return;

    try {
      const response = await cancelOrder(orderId);
      if (!response) {
        return;
      }

      // Update the status of the order in local state
      const updatedOrders = orders.map((order) =>
        order.id === orderId ? { ...order, orderStatus: "CANCELLED" } : order
      );
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error cancelling order:", error);
    }
  };

  const handlePayment = () =>{
    console.log("Payment Done")
  }

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-6 text-center sm:text-left">
        My Orders
      </h2>
      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="p-4 border border-gray-200 rounded shadow hover:shadow-md transition"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                <h3 className="text-md font-semibold text-primary">
                  {order.service}
                </h3>
                <span
                  className={`text-sm px-2 py-1 rounded ${
                    order.orderStatus === "CONFIRMED"
                      ? "bg-green-100 text-green-700"
                      : order.orderStatus === "PENDING"
                      ? "bg-yellow-100 text-yellow-700"
                      : order.orderStatus === "CANCELLED"
                      ? "bg-red-100 text-red-700"
                      : order.orderStatus === "COMPLETED"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {order.orderStatus}
                </span>
              </div>

              <p className="text-sm text-gray-600">
                📅 {order.date} at 🕒 {order.serviceTime}
              </p>
              <p className="text-sm text-gray-600">📍 {order.address}</p>

              {/* Cancel Button */}
              {order.orderStatus == "PENDING" && order.orderStatus !=="COMPLETED" && (
                <button
                  onClick={() => handleCancel(order.id)}
                  className="mt-3 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
                >
                  Cancel Order
                </button>
              )}

              {order.orderStatus == "COMPLETED" && (
                <Button
                  onClick={() => handlePayment(order.id)}
                  className="mt-3 bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-700 cursor-pointer transition"
                >
                  Make A Payment
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
