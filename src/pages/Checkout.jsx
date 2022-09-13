import React, { useState } from "react";
import { Box, Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address1: "",
    address2: "",
    postal_code: "",
    city: "",
    country: "",
    mobile: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("form", JSON.stringify(formData));
    navigate("/cart/checkout/payment");
  };

  return (
    <Box paddingTop="100" paddingBottom={"50px"} bg="rgba(241, 223, 223, 0.19)">
      <form onSubmit={handleSubmit}>
        <Flex
          direction={"column"}
          boxShadow="rgba(227, 226, 226, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          width={{ base: "95%", md: "500px", lg: "500px" }}
          m={"auto"}
          p="30px 20px"
          gap={"20px"}
          bg="white"
        >
          <Text fontWeight={"600"} fontSize="25px">
            Delivery Address
          </Text>
          <Flex gap={"9px"}>
            <Input
              isInvalid
              errorBorderColor="rgba(43, 41, 41, 0.19)"
              type="text"
              placeholder="*First Name"
              borderRadius="0px"
              onChange={handleChange}
              name="first_name"
              value={formData.first_name}
              isRequired
            />
            <Input
              isInvalid
              errorBorderColor="rgba(43, 41, 41, 0.19)"
              type="text"
              placeholder="*Last Name"
              borderRadius="0px"
              onChange={handleChange}
              name="last_name"
              value={formData.last_name}
              isRequired
            />
          </Flex>
          <Flex>
            <Input
              isInvalid
              errorBorderColor="rgba(43, 41, 41, 0.19)"
              type="text"
              placeholder="*Address Line 1"
              borderRadius="0px"
              onChange={handleChange}
              name="address1"
              value={formData.address1}
              isRequired
            />
          </Flex>
          <Flex>
            <Input
              isInvalid
              errorBorderColor="rgba(43, 41, 41, 0.19)"
              type="text"
              placeholder="*Address Line 2"
              borderRadius="0px"
              onChange={handleChange}
              name="address2"
              value={formData.address2}
              isRequired
            />
          </Flex>
          <Flex gap={"9px"}>
            <Input
              isInvalid
              errorBorderColor="rgba(43, 41, 41, 0.19)"
              type="number"
              placeholder="*Postal Code"
              borderRadius="0px"
              onChange={handleChange}
              name="postal_code"
              value={formData.postal_code}
              isRequired
            />
            <Input
              isInvalid
              errorBorderColor="rgba(43, 41, 41, 0.19)"
              type="text"
              placeholder="*City"
              borderRadius="0px"
              onChange={handleChange}
              name="city"
              value={formData.city}
              isRequired
            />
          </Flex>
          <Flex>
            <Input
              isInvalid
              errorBorderColor="rgba(43, 41, 41, 0.19)"
              type="test"
              placeholder="*Country"
              borderRadius="0px"
              onChange={handleChange}
              name="country"
              value={formData.country}
              isRequired
            />
          </Flex>

          <Flex>
            <Input
              isInvalid
              errorBorderColor="rgba(43, 41, 41, 0.19)"
              type="number"
              placeholder="*Mobile No."
              borderRadius="0px"
              onChange={handleChange}
              name="mobile"
              value={formData.mobile}
              isRequired
            />
          </Flex>
          <Flex align={"center"} gap="10px">
            <Checkbox isRequired />
            <Text>Save this address for my next purchase.</Text>
          </Flex>
          <Button type="submit" color={"white"} bg="blue">
            CONTINUE TO PAYMENT
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Checkout;
