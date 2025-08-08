import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
// Make sure you have this API function created to call your new endpoint
import { updateOrderStatusInProgress } from '../../api/Partner'; 

const UpcomingOrdersTable = ({ orders, partnerId, onUpdateSuccess }) => {
  // State to track which order card is expanded to show details
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  // Filter for orders that are specifically "CONFIRMED"
  const confirmedOrders = Array.isArray(orders)
    ? orders.filter(order => order.orderStatus === "CONFIRMED")
    : [];

  // Function to handle expanding/collapsing the details view
  const toggleDetails = (orderId) => {
    setSelectedOrderId(prevId => (prevId === orderId ? null : orderId));
  };

  // Function for the "Start Job" button
  const handleStartOrder = async (e, orderId) => {
    e.stopPropagation(); // Prevents the card from toggling details when the button is clicked

    try {
      await updateOrderStatusInProgress(partnerId, orderId);
      toast.success("Job started! The order is now IN PROGRESS.");
      // Call the refresh function from the dashboard to update all data
      if (onUpdateSuccess) {
        onUpdateSuccess();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to start the job.");
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Upcoming Orders</h3>
      
      {confirmedOrders.length === 0 ? (
        <div className="bg-white shadow-md rounded-lg p-6 text-center text-gray-500">
          You have no confirmed upcoming orders.
        </div>
      ) : (
        <div className="space-y-4">
          {confirmedOrders.map((order) => (
            <div key={order.id} className="bg-white shadow-md rounded-lg p-4 cursor-pointer transition-shadow hover:shadow-lg" onClick={() => toggleDetails(order.id)}>
              <div className="flex justify-between items-start">
                {/* Left side: Order Info */}
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-gray-800">{order.service || 'N/A'}</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaCalendarAlt className="mr-2 text-primary" /> {order.serviceDate}
                    <FaClock className="ml-4 mr-2 text-primary" /> at {order.serviceTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-primary" />
                    {`${order.address?.address}, ${order.address?.city} - ${order.address?.pincode}`}
                  </div>
                </div>

                {/* Right side: Status Badge */}
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {order.orderStatus}
                  </span>
                </div>
              </div>

              {/* Collapsible Details Section */}
              {selectedOrderId === order.id && (
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                  <h5 className="font-semibold">Order Details</h5>
                  {/* <p className="text-sm"><strong>Customer Name:</strong> {order.address?.user?.firstName || 'N/A'}</p> */}
                  <p className="text-sm"><strong>Total Cost:</strong> ₹{order.totalCost?.toFixed(2) || '0.00'}</p>
                  
                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={(e) => handleStartOrder(e, order.id)}
                      className="bg-blue-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Start Job (Set to IN PROGRESS)
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingOrdersTable;