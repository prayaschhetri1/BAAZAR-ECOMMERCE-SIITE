import {
  Box,
  Button,
  Flex,
  HStack,
  PinInput,
  PinInputField,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [otp, setOtp] = useState(null);
  const [isSuccess, setIsSuccess] = useState(0);
  const [input, setInput] = useState("");
  useEffect(() => {
    setTimeout(() => {
      var val = Math.floor(1000 + Math.random() * 9000);
      setOtp(val);
      alert(`Your OTP is ${val}`);
    }, 3000);
  }, []);

  const handleChange = (e) => {};
  const handleOTP = () => {
    console.log(input);
  };

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/");
  };
  return (
    <Box pt="200px" pb="300px" m="auto">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"25px"}>Congratulations🎉🎉</ModalHeader>
          <ModalCloseButton />
          <ModalBody py="40px" px="50px" fontSize={"20px"}>Your Order has been Successfully placed
          We will delevered your product soon. Happy Shopping 😍😍😍
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" onClick={handleRedirect}>
              Go Back To Home Page
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        direction={"column"}
        m="auto"
        align={"center"}
        gap="19px"
        p={"60px 0px"}
        color={"white"}
        bg={"#02054B"}
        width={{ base: "95%", md: "450px", lg: "470px" }}
      >
        <Text fontSize="22px" fontWeight={"600"} align={"center"}>
          Fill The OTP
        </Text>

        <Flex mt="50px">
          <PinInput m="auto" type="alphanumeric" size="lg">
            <PinInputField onChange={handleChange} />
            <PinInputField onChange={handleChange} />
            <PinInputField onChange={handleChange} />
            <PinInputField onChange={handleChange} />
          </PinInput>
        </Flex>
        <Flex>
          <Button onClick={onOpen} bg="green">
            SUBMIT
          </Button>
        </Flex>
        <Text
          cursor={"pointer"}
          mt="50px"
          color={"pink"}
          fontSize="12px"
          fontWeight={"600"}
          align={"center"}
        >
          Did'nt got the OTP? Click Here
        </Text>
      </Flex>
    </Box>
  );
};

export default Otp;
