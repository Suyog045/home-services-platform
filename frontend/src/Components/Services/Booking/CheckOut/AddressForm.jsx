import React, { useEffect, useState } from "react";
import {
  Label,
  TextInput,
  Textarea,
  HelperText,
  Button,
} from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../../../hooks/useBooking";
import { getUserAddresses } from "../../../../api/User";
import { useAuth } from "../../../../providers/AuthContext";

const AddressForm = () => {
  const navigate = useNavigate();
  const { setAddress } = useBooking();
  const {user} = useAuth();

  const [savedAddresses, setSavedAddresses] = useState([]);

  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [addressDetails, setAddressDetails] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const [touched, setTouched] = useState({});

  const handleSelectAddress = (id) => {
    setSelectedAddressId(id);
    const selected = savedAddresses.find((addr) => addr.id === Number(id));
    if (selected) {
      setAddressDetails({ ...selected });
      setTouched({});
    }
  };

  // const handleNewAddress = () => {
  //   setSelectedAddressId(null);
  //   setAddressDetails({
  //     address: "",
  //     city: "",
  //     state: "",
  //     country: "",
  //     pincode: "",
  //   });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isValid = () =>
    addressDetails.address &&
    addressDetails.city &&
    addressDetails.state &&
    addressDetails.country &&
    addressDetails.pincode;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid()) return;

    setAddress(addressDetails);
    navigate("/services/checkout");
  };
  
  useEffect(() => {
    if(isValid()) {
      setAddress(addressDetails);
    }
  }, [addressDetails]);

  useEffect(()=> {
      const fetchUserAddresses = async()=>{
        const response = await getUserAddresses(user.id,user.token);
        setSavedAddresses(response)
      }

      fetchUserAddresses()
    },[])

  return (
    <div className="flex w-full">
      <div className="flex flex-col items-center justify-center w-full mx-4 gap-6">
        <h1 className="text-xl font-semibold mt-4">Address Information</h1>

        <form
          className="max-w-2xl pb-5 rounded-md w-full space-y-5"
          onSubmit={handleSubmit}
        >
          <div>
            <Label htmlFor="saved-address">Choose Saved Address</Label>
            <select
              id="saved-address"
              className="w-full border rounded p-2 mt-1"
              value={selectedAddressId || ""}
              onChange={(e) => handleSelectAddress(e.target.value)}
            >
              <option value="">-- Select from saved addresses --</option>
              {savedAddresses.map((addr) => (
                <option key={addr.id} value={addr.id}>
                  {addr.address}, {addr.city} - {addr.pincode}
                </option>
              ))}
            </select>
            
          </div>

          <div>
            <Label htmlFor="address">Full Address</Label>
            <Textarea
              id="address"
              name="address"
              rows={3}
              value={addressDetails.address}
              onChange={handleChange}
              onBlur={() => handleBlur("address")}
            />
            {touched.address && !addressDetails.address && (
              <HelperText color="failure">Address is required</HelperText>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <TextInput
                id="city"
                name="city"
                value={addressDetails.city}
                onChange={handleChange}
                onBlur={() => handleBlur("city")}
              />
              {touched.city && !addressDetails.city && (
                <HelperText color="failure">City is required</HelperText>
              )}
            </div>

            <div>
              <Label htmlFor="state">State</Label>
              <TextInput
                id="state"
                name="state"
                value={addressDetails.state}
                onChange={handleChange}
                onBlur={() => handleBlur("state")}
              />
              {touched.state && !addressDetails.state && (
                <HelperText color="failure">State is required</HelperText>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="country">Country</Label>
              <TextInput
                id="country"
                name="country"
                value={addressDetails.country}
                onChange={handleChange}
                onBlur={() => handleBlur("country")}
              />
              {touched.country && !addressDetails.country && (
                <HelperText color="failure">Country is required</HelperText>
              )}
            </div>

            <div>
              <Label htmlFor="pincode">Pincode</Label>
              <TextInput
                id="pincode"
                name="pincode"
                type="number"
                value={addressDetails.pincode}
                onChange={handleChange}
                onBlur={() => handleBlur("pincode")}
              />
              {touched.pincode && !addressDetails.pincode && (
                <HelperText color="failure">Pincode is required</HelperText>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
