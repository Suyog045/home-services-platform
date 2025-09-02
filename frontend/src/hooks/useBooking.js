import { useContext } from "react";
import { BookingContext } from "../providers/BookingContextProvider";

export const useBooking = () => useContext(BookingContext);