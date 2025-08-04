import { useContext } from "react";
import { ServiceContext } from "../Providers/ServiceContextProvider";

export const useService = () => useContext(ServiceContext);