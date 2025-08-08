import { useContext } from "react";
import { BookingContext } from "../Providers/BookingContextProvider";

export const useBooking = () => useContext(BookingContext);