import React, { useEffect, useState } from "react";
import OrderSummary from "./OrderSummary";
import CheckOutOrder from "./CheckOutOrder";
import AddressForm from "./AddressForm";
import { useBooking } from "../../../../hooks/useBooking";
import { getServicesByIds } from "../../../../api/CatalogService";

const CheckOutPageLayout = () => {
  const { bookingDetails } = useBooking();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      if (bookingDetails?.serviceIds?.length > 0) {
        const data = await getServicesByIds(bookingDetails.serviceIds);
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
          <OrderSummary services={services} />
        </div>
        <CheckOutOrder services={services} />
      </div>
    </div>
  );
};

export default CheckOutPageLayout;
