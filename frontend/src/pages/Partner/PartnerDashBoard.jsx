import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaAngleLeft,
  FaAngleRight,
  FaTachometerAlt,
  FaClipboardList,
  FaTools,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";



export default function PartnerDashboard() {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const [services, setServices] = useState([
    { name: "AC Repair", category: "Appliance", charges: "500" },
    { name: "Washing Machine Repair", category: "Appliance", charges: "700" },
    { name: "General Electrical Work", category: "Electrical", charges: "300" },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editedService, setEditedService] = useState({ name: "", category: "", charges: "" });

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedService(services[index]);
  };

  const handleSave = (index) => {
    const updatedServices = [...services];
    updatedServices[index] = editedService;
    setServices(updatedServices);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };


  const dummyStats = [
    { label: "Completed Visits", value: 20 },
    { label: "Pending visits", value: 4 },
    { label: "Total Earnings", value: "₹25,000" },
  ];

  const tabData = [
    { key: "dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { key: "orders", label: "Orders", icon: <FaClipboardList /> },
    { key: "services", label: "Services", icon: <FaTools /> },
    { key: "profile", label: "Profile", icon: <FaUser /> },
  ];

  const handleLogout = () => {
    
    navigate("/partner/")
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">

      
      
      <aside
        className={`bg-white shadow-lg flex flex-col py-4 px-2 transition-all duration-300 ${showSidebar ? "w-64" : "w-20"
          }`}
      >
      
        <div className="flex justify-between items-center px-2 mb-4">
          {showSidebar && (
            <h2 className="text-xl font-bold text-primary">Partner</h2>
          )}
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="text-xl text-primary"
          >
            {showSidebar ? <FaAngleLeft /> : <FaAngleRight />}
          </button>
        </div>

       
        {showSidebar && (
          <div className="flex flex-col items-center mb-6">
            <img
              src="/images/profile.png"
              alt="Partner"
              className="w-20 h-20 rounded-full mb-2"
            />
            <p className="text-lg font-semibold text-gray-800">Hi, Suyog!</p>
          </div>
        )}

       
        <nav className="flex flex-col gap-2">
          {tabData.map(({ key, label, icon }) => (
            <button
              key={key}
              className={`flex items-center gap-3 px-4 py-2 rounded transition ${activeTab === key
                ? "bg-secondary text-white"
                : "hover:bg-primary/10 text-primary"
                }`}
              onClick={() => setActiveTab(key)}
            >
              <span className="text-lg">{icon}</span>
              {showSidebar && <span className="capitalize">{label}</span>}
            </button>
          ))}
        </nav>
      </aside>

    
      <div className="flex flex-col flex-1">
       
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">Home<span className="text-secondary">Mate</span></h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-secondary text-white px-4 py-2  hover:bg-secondary-hover transition cursor-pointer rounded-4xl" 
          >
            <FaSignOutAlt />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </header>

       
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6 capitalize">{activeTab}</h1>

          {activeTab === "dashboard" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {dummyStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
                  >
                    <span className="text-2xl font-semibold">
                      {stat.value}
                    </span>
                    <span className="text-gray-600">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Upcoming Orders
                </h2>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="p-2">Order ID</th>
                      <th className="p-2">Customer</th>
                      <th className="p-2">Service</th>
                      <th className="p-2">Date</th>
                      <th className="p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-2">#1001</td>
                      <td className="p-2">Ravi Kumar</td>
                      <td className="p-2">AC Repair</td>
                      <td className="p-2">25 July 2025</td>
                      <td className="p-2 text-yellow-600 font-semibold">
                        Pending
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-2">#1002</td>
                      <td className="p-2">Sneha Patil</td>
                      <td className="p-2">Electrician</td>
                      <td className="p-2">26 July 2025</td>
                      <td className="p-2 text-yellow-600 font-semibold">
                        Pending
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === "orders" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">All Orders</h2>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Order ID</th>
                    <th className="p-2">Customer</th>
                    <th className="p-2">Service</th>
                    <th className="p-2">Date</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-2">#1001</td>
                    <td className="p-2">Ravi Kumar</td>
                    <td className="p-2">AC Repair</td>
                    <td className="p-2">25 July 2025</td>
                    <td className="p-2 text-yellow-600 font-semibold">
                      Pending
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-2">#1003</td>
                    <td className="p-2">Anjali Mehta</td>
                    <td className="p-2">Plumber</td>
                    <td className="p-2">20 July 2025</td>
                    <td className="p-2 text-green-600 font-semibold">
                      Completed
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}


          {activeTab === "services" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">My Services</h2>
                <button className=" bg-secondary text-white px-4 py-2  hover:bg-secondary-hover transition cursor-pointer rounded-4xl">
                  Add Service
                </button>
              </div>

              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Service Name</th>
                    <th className="p-2">Category</th>
                    <th className="p-2">Charges</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      {editIndex === index ? (
                        <>
                          <td className="p-2">
                            <input
                              value={editedService.name}
                              onChange={(e) =>
                                setEditedService({ ...editedService, name: e.target.value })
                              }
                              className="border p-1 rounded w-full"
                            />
                          </td>
                          <td className="p-2">
                            <input
                              value={editedService.category}
                              onChange={(e) =>
                                setEditedService({ ...editedService, category: e.target.value })
                              }
                              className="border p-1 rounded w-full"
                            />
                          </td>
                          <td className="p-2">
                            <input
                              value={editedService.charges}
                              onChange={(e) =>
                                setEditedService({ ...editedService, charges: e.target.value })
                              }
                              className="border p-1 rounded w-full"
                            />
                          </td>
                          <td className="p-2 flex gap-2">
                            <button
                              className="text-green-600 hover:underline"
                              onClick={() => handleSave(index)}
                            >
                              Save
                            </button>
                            <button
                              className="text-gray-600 hover:underline"
                              onClick={() => setEditIndex(null)}
                            >
                              Cancel
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="p-2">{service.name}</td>
                          <td className="p-2">{service.category}</td>
                          <td className="p-2">₹{service.charges}</td>
                          <td className="p-2 flex gap-2">
                            <button
                              className="text-blue-600 hover:underline"
                              onClick={() => handleEdit(index)}
                            >
                              Edit
                            </button>
                            <button
                              className="text-red-600 hover:underline"
                              onClick={() => handleDelete(index)}
                            >
                              Delete
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}



          {activeTab === "profile" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Partner Profile</h2>
              <p>
                <strong>Name:</strong> Suyog Avhad
              </p>
              <p>
                <strong>Email:</strong> suyog@example.com
              </p>
              <p>
                <strong>Phone:</strong> +91 9876543210
              </p>
              <p>
                <strong>Experience:</strong> 3 years
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
