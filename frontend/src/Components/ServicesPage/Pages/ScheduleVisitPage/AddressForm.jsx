import React, { useState } from "react";
import { Label, TextInput, Textarea, HelperText, Button } from "flowbite-react";
import { Link } from "react-router-dom";

const AddressForm = ({ onSubmit }) => {
  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(address); // Send address data to parent or backend
  };

  return (
    <div className="flex">
      <div className="mt-14 h-screen flex flex-col items-center justify-center w-full mx-8 gap-6">
        <div>
            <h1 className="text-2xl font-medium">Address Information</h1>
        </div>
        <form className="space-y-4 mt-4 max-w-2xl shadow-2xl p-10 rounded-md" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="addressLine1">Address Line 1</Label>
            <Textarea
              id="addressLine1"
              name="addressLine1"
              rows={2}
              value={address.addressLine1}
              onChange={handleChange}
              onBlur={() => handleBlur("addressLine1")}
            />
            {touched.addressLine1 && !address.addressLine1 && (
              <HelperText color="failure">
                Address Line 1 is required
              </HelperText>
            )}
          </div>

          <div>
            <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
            <Textarea
              id="addressLine2"
              name="addressLine2"
              rows={2}
              value={address.addressLine2}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <TextInput
                id="city"
                name="city"
                value={address.city}
                onChange={handleChange}
                onBlur={() => handleBlur("city")}
              />
              {touched.city && !address.city && (
                <HelperText color="failure">City is required</HelperText>
              )}
            </div>

            <div>
              <Label htmlFor="state">State</Label>
              <TextInput
                id="state"
                name="state"
                value={address.state}
                onChange={handleChange}
                onBlur={() => handleBlur("state")}
              />
              {touched.state && !address.state && (
                <HelperText color="failure">State is required</HelperText>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="pincode">Pincode</Label>
              <TextInput
                id="pincode"
                name="pincode"
                value={address.pincode}
                type="number"
                onChange={handleChange}
                onBlur={() => handleBlur("pincode")}
              />
              {touched.pincode && !address.pincode && (
                <HelperText color="failure">Pincode is required</HelperText>
              )}
            </div>

            <div>
              <Label htmlFor="landmark">Landmark (Optional)</Label>
              <TextInput
                id="landmark"
                name="landmark"
                value={address.landmark}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Link to={"checkout"}>
            <Button type="submit" className="bg-secondary hover:bg-secondary-hover cursor-pointer">
              Proceed To Payment
            </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
