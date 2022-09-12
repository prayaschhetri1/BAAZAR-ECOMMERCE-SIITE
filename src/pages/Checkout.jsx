import React from "react";
import { Box, Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";

const Checkout = () => {
  return (
    <Box paddingTop="100" paddingBottom={"50px"} bg="rgba(241, 223, 223, 0.19)">
      <Flex
        direction={"column"}
        boxShadow="rgba(227, 226, 226, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        width={{base:"95%",md:"500px",lg:"500px"}}
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
          />
          <Input
            isInvalid
            errorBorderColor="rgba(43, 41, 41, 0.19)"
            type="text"
            placeholder="*Last Name"
            borderRadius="0px"
          />
        </Flex>
        <Flex>
          <Input
            isInvalid
            errorBorderColor="rgba(43, 41, 41, 0.19)"
            type="text"
            placeholder="*Address Line 1"
            borderRadius="0px"
          />
        </Flex>
        <Flex>
          <Input
            isInvalid
            errorBorderColor="rgba(43, 41, 41, 0.19)"
            type="text"
            placeholder="*Address Line 2"
            borderRadius="0px"
          />
        </Flex>
        <Flex gap={"9px"}>
          <Input
            isInvalid
            errorBorderColor="rgba(43, 41, 41, 0.19)"
            type="number"
            placeholder="*Postal Code"
            borderRadius="0px"
          />
          <Input
            isInvalid
            errorBorderColor="rgba(43, 41, 41, 0.19)"
            type="text"
            placeholder="*City"
            borderRadius="0px"
          />
        </Flex>
        <Flex>
          <Input
            isInvalid
            errorBorderColor="rgba(43, 41, 41, 0.19)"
            type="test"
            placeholder="*Country"
            borderRadius="0px"
          />
        </Flex>

        <Flex>
          <Input
            isInvalid
            errorBorderColor="rgba(43, 41, 41, 0.19)"
            type="number"
            placeholder="*Mobile No."
            borderRadius="0px"
          />
        </Flex>
        <Flex align={"center"} gap="10px">
          <Checkbox />
          <Text>Save this address for my next purchase.</Text>
        </Flex>
        <Button color={"white"} bg="blue">
          CONTINUE TO PAYMENT
        </Button>
      </Flex>
    </Box>
  );
};

export default Checkout;
