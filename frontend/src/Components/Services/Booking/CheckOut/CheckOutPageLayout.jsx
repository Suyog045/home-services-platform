import React, { useEffect, useState } from "react";
import BookingSummary from "./BookingSummary";
import CheckOutOrder from "./CheckOut";
import AddressForm from "./AddressForm";
import { useBooking } from "../../../../hooks/useBooking";
import { getServicesByIds } from "../../../../api/CatalogService";
import { useAuth } from "../../../../providers/AuthContext";

const CheckOutPageLayout = () => {
  const { bookingDetails } = useBooking();
  const [services, setServices] = useState([]);
  const {user} = useAuth()

  useEffect(() => {
    const loadServices = async () => {
      if (bookingDetails?.serviceIds?.length > 0) {
        const data = await getServicesByIds(bookingDetails.serviceIds,user.token);
        setServices(data);
      } else {
        setServices([]);
      }
    };
    loadServices();
  }, [bookingDetails]);

  return (
    <div className="flex">
      <div className="mt-36 mb-10 flex items-start justify-center w-full mx-8 gap-6">
        <div className="flex flex-col-reverse shadow">
          <AddressForm />
          <BookingSummary services={services} />
        </div>
        <CheckOutOrder services={services} />
      </div>
    </div>
  );
};

export default CheckOutPageLayout;
