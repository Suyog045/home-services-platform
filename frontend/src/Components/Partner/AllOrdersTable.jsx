import React from "react";
import {
  updateOrderStatusCompleted,
  updateOrderStatusInProgress,
} from "../../api/Partner";

const AllOrdersTable = ({ orders, setOrders, partnerId }) => {
  const handleStatusUpdate = async (orderId, currentStatus) => {
    try {
      let newStatus;

      if (currentStatus === "CONFIRMED") {
        await updateOrderStatusInProgress(partnerId, orderId);
        newStatus = "IN_PROGRESS";
      } else if (currentStatus === "IN_PROGRESS") {
        await updateOrderStatusCompleted(partnerId, orderId);
        newStatus = "COMPLETED";
      }

      if (newStatus) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === orderId ? { ...order, orderStatus: newStatus } : order
          )
        );
      }
    } catch (error) {
      console.error("Failed to update order status", error);
      alert("Something went wrong while updating the order.");
    }
  };

  const getStatusButton = (order) => {
    if (order.orderStatus === "CONFIRMED") {
      return (
        <button
          onClick={() => handleStatusUpdate(order.id, order.orderStatus)}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Start
        </button>
      );
    } else if (order.orderStatus === "IN_PROGRESS") {
      return (
        <button
          onClick={() => handleStatusUpdate(order.id, order.orderStatus)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Mark Completed
        </button>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">All Orders</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">Order ID</th>
            <th className="p-2">Service</th>
            <th className="p-2">Date</th>
            <th className="p-2">Time</th>
            <th className="p-2">Status</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="p-2">#{order.id}</td>
              <td className="p-2">{order.service}</td>
              <td className="p-2">{order.serviceDate}</td>
              <td className="p-2">{order.serviceTime}</td>
              <td
                className={`p-2 font-semibold ${
                  order.orderStatus === "COMPLETED"
                    ? "text-green-600"
                    : order.orderStatus === "IN_PROGRESS"
                    ? "text-blue-600"
                    : "text-yellow-600"
                }`}
              >
                {order.orderStatus}
              </td>
              <td className="p-2">₹{order.totalCost}</td>
              <td className="p-2">{getStatusButton(order)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrdersTable;
