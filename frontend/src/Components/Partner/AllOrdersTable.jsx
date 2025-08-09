import React, { useState } from "react";
import {
  updateOrderStatusCompleted,
  updateOrderStatusInProgress,
} from "../../api/Partner";
import { toast } from "react-toastify";
import PaginationComponent from "../Shared/PaginationComponent";

const AllOrdersTable = ({ orders, partnerId, onUpdateSuccess }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const handleStatusUpdate = async (orderId, currentStatus) => {
    try {
      if (currentStatus === "CONFIRMED") {
        await updateOrderStatusInProgress(partnerId, orderId);
        toast.success("Job started!");
      } else if (currentStatus === "INPROGRESS") {
        await updateOrderStatusCompleted(partnerId, orderId);
        toast.success("Order marked as completed!");
      }
      
      if (onUpdateSuccess) {
        onUpdateSuccess();
      }

    } catch (error) {
      console.error("Failed to update order status", error);
      toast.error(error.response?.data?.message || "Failed to update status.");
    }
  };

  const getStatusButton = (order) => {
    
    if (order.orderStatus === "CONFIRMED") {
      return (
        <button
          onClick={() => handleStatusUpdate(order.id, order.orderStatus)}
          className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600 transition-colors"
        >
          Start Job
        </button>
      );
    } else if (order.orderStatus === "INPROGRESS") {
      return (
        <button
          onClick={() => handleStatusUpdate(order.id, order.orderStatus)}
          className="bg-green-500 text-white px-3 py-1 text-sm rounded hover:bg-green-600 transition-colors"
        >
          Mark Completed
        </button>
      );
    }
    return <span className="text-gray-400 text-sm">-</span>;
  };

  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
      <h2 className="text-xl font-semibold mb-4 flex-shrink-0">
        All Orders History
      </h2>
      
      {orders.length > 0 ? (
        <>
         
          <div className="flex-grow overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead>
               
              </thead>
              <tbody>
                {currentOrders.map((order) => (
                   <tr key={order.id} className="border-b hover:bg-gray-50">
                   <td className="p-3 text-sm font-semibold">{order.service?.name || 'N/A'}</td>
                   <td className="p-3 text-sm">{order.serviceDate}</td>
                   <td className="p-3 text-sm">
                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                       order.orderStatus === "COMPLETED" ? "bg-green-100 text-green-800"
                       : order.orderStatus === "INPROGRESS" ? "bg-blue-100 text-blue-800"
                       : order.orderStatus === "CONFIRMED" ? "bg-yellow-100 text-yellow-800"
                       : "bg-red-100 text-red-700"
                     }`}>
                       {order.orderStatus}
                     </span>
                   </td>
                   <td className="p-3 text-sm">₹{order.totalCost.toFixed(2)}</td>
                   <td className="p-3 text-center">{getStatusButton(order)}</td>
                 </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          
          <div className="flex-shrink-0 pt-4">
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 py-4">No orders found.</p>
      )}
    </div>
  );
};

export default AllOrdersTable;