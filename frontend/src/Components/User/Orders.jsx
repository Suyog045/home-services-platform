import React, { useEffect, useState } from "react";
import { useAuth } from "../../Providers/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cancelOrder, getOrdersByUserId } from "../../api/Order";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import PaginationComponent from "../Shared/PaginationComponent";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalData, setModalData] = useState({
    show: false,
    type: "",
    title: "",
    message: "",
    confirmAction: null,
    confirmText: "",
    confirmColor: "success",
  });

  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const ordersPerPage = 5;

  const { user } = useAuth();

  const fetchOrders = async () => {
    try {
      const response = await getOrdersByUserId(user.id, user.token);
      setOrders(response);
      if (response.length === 0) {
        toast.info("You have no orders yet.");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to fetch orders.");
    }
  };
  useEffect(() => {
    if (user?.id) {
      fetchOrders();
    }
  }, [user]);

  const handleCancelOrder = async (orderId) => {
    try {
      await cancelOrder(orderId); // Your API call
      fetchOrders(); // Refresh orders after cancel
      toast.success("Order canceled successfully");
    } catch (error) {
      toast.error("Failed to cancel order");
    } finally {
      setShowCancelModal(false);
      setSelectedOrderId(null);
    }
  };

  const handlePayment = async (orderId) => {
    try {
      const selectedOrder = orders.find((order) => order.id === orderId);
      const amount = selectedOrder.totalCost;

      const res = await fetch(
        "http://localhost:8080/payment/create-payment-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ amount }),
        }
      );

      const { orderId: razorpayOrderId } = await res.json();
      console.log(import.meta.env.VITE_RAZORPAY_KEY_ID);
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: "INR",
        name: "Home Services",
        description: "Service Payment",
        order_id: razorpayOrderId,
        handler: async function (response) {
          const verificationRes = await fetch(
            "http://localhost:8080/payment/verify",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },
              body: JSON.stringify({
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                orderId,
              }),
            }
          );

          if (verificationRes.ok) {
            setModalData({
              show: true,
              type: "payment-success",
              title: "Payment Successful!",
              message: "Thank you for your payment.",
              confirmAction: null,
              confirmText: "",
              confirmColor: "success",
            });
            setOrders((prevOrders) =>
              prevOrders.map((o) =>
                o.id === orderId ? { ...o, orderStatus: "PAID" } : o
              )
            );
          } else {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: user.fullName,
          email: user.email,
          contact: "9999999999",
        },
        theme: {
          color: "#4CAF50",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Something went wrong during payment!");
    }
  };

  const statusPriority = {
    COMPLETED: 1,
    IN_PROGRESS: 2,
    CONFIRMED: 3,
    PENDING: 4,
    PAID: 5,
    CANCELLED: 6,
  };

  const sortedOrders = [...orders].sort((a, b) => {
    const priorityA = statusPriority[a.orderStatus] || 5;
    const priorityB = statusPriority[b.orderStatus] || 5;
    return priorityA - priorityB;
  });

  const totalPages = Math.ceil(sortedOrders.length / ordersPerPage);
  const indexOfLast = currentPage * ordersPerPage;
  const indexOfFirst = indexOfLast - ordersPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirst, indexOfLast);

  return (
    <div className="bg-white p-6 rounded w-full max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-6 text-center sm:text-left">
        My Orders
      </h2>
      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders yet.</p>
      ) : (
        <>
          <div className="space-y-4">
            {currentOrders.map((order) => (
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
                        : order.orderStatus === "PAID"
                        ? "bg-purple-100 text-purple-700"
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

                {order.orderStatus === "PENDING" && (
                  <Button
                    onClick={() => {
                      setModalData({
                        show: true,
                        type: "cancel-order",
                        title: "Cancel this order?",
                        message: "This action cannot be undone.",
                        confirmAction: () => handleCancelOrder(order.id),
                        confirmText: "Yes, Cancel",
                        confirmColor: "failure",
                      });
                    }}
                    color="failure"
                    className="mt-3 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition cursor-pointer"
                  >
                    Cancel Order
                  </Button>
                )}

                {order.orderStatus === "COMPLETED" && (
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

          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}

      <Modal
        show={modalData.show}
        size="md"
        onClose={() => setModalData({ ...modalData, show: false })}
        popup
      >
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle
              className={`mx-auto mb-4 h-14 w-14 ${
                modalData.confirmColor === "failure"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            />
            <h3 className="mb-5 text-lg font-semibold text-gray-700">
              {modalData.title}
            </h3>
            {modalData.message && (
              <p className="text-sm text-gray-500 mb-4">{modalData.message}</p>
            )}
            <div className="flex justify-center gap-4">
              {modalData.confirmAction && (
                <Button
                  color={modalData.confirmColor}
                  onClick={() => {
                    modalData.confirmAction();
                    setModalData({ ...modalData, show: false });
                  }}
                  className="cursor-pointer"
                >
                  {modalData.confirmText || "Confirm"}
                </Button>
              )}
              <Button
                color="gray"
                onClick={() => setModalData({ ...modalData, show: false })}
                className="cursor-pointer"
              >
                Close
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Orders;
