import React from "react";

const AllOrdersTable = ({ orders }) => (
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
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id} className="border-b hover:bg-gray-50">
            <td className="p-2">#{order.id}</td>
            <td className="p-2">{order.service}</td>
            <td className="p-2">{order.serviceDate}</td>
            <td className="p-2">{order.serviceTime}</td>
            <td
              className={`p-2 font-semibold ${
                order.orderStatus === "COMPLETED"
                  ? "text-green-600"
                  : "text-yellow-600"
              }`}
            >
              {order.orderStatus}
            </td>
            <td className="p-2">₹{order.totalCost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AllOrdersTable;