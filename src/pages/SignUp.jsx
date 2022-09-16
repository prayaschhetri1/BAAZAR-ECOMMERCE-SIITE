import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [input,setInput] = useState({
    first_name:"",
    last_name:"",
    email:"",
    mobile:"",
    age:"",
    password:"",
    gender:"male"
  })
  const handleChange = (e) => {
    const {name,value} = e.target;
    setInput({...input,[name]:value})
  }
  const handleSignUpForm = (e) => {
    e.preventDefault();
    console.log(input)
  };
  return (
    <Box pt="100px" m="auto" minHeight={"100vh"} bg="#e6e6e6">
      <Flex
        width={{ base: "400px", md: "440px", lg: "460px" }}
        m="auto"
        box-shadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        bg="white"
        direction={"column"}
        align={"center"}
        gap="10px"
      >
        <Flex
          height={"100px"}
          width="100%"
          align={"center"}
          justify="center"
          bg="#1f1919"
        >
          <Text fontWeight={"600"} color="white" fontSize="29px">
            SignUp
          </Text>
        </Flex>
        <form onSubmit={handleSignUpForm}>
          <Flex
            m="auto"
            box-shadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
            bg="white"
            direction={"column"}
            padding="0px 30px 20px 30px"
            align={"center"}
            gap="20px"
          >
            <Flex w={"100%"} gap="10px" mt="20px">
              <Input
                type="text"
                isInvalid
                errorBorderColor="rgba(0, 0, 0, 0.19)"
                placeholder="First Name"
                borderRadius={"0px"}
                onChange={handleChange}
                value={input.first_name}
                name="first_name"
              />
              <Input
                type="text"
                isInvalid
                errorBorderColor="rgba(0, 0, 0, 0.19)"
                placeholder="Last Name"
                borderRadius={"0px"}
                onChange={handleChange}
                value={input.last_name}
                name="last_name"

              />
            </Flex>
            <Input
              type="email"
              isInvalid
              errorBorderColor="rgba(0, 0, 0, 0.19)"
              placeholder="Email"
              borderRadius={"0px"}
              onChange={handleChange}
              value={input.email}
              name="email"

            />
            <Flex w={"100%"} justify="space-between" align={"center"}>
              <Flex direction={"column"} align="center">
                <Text fontWeight={"600"}>Gender</Text>
                <Flex align={"center"} gap="10px">
                  <Flex align={"center"} gap="4px">
                    <input name="male" type="radio" value={input.gender} onChange={handleChange} />
                    <Text fontSize={"14px"} fontWeight={"600"}>
                      Male
                    </Text>
                  </Flex>
                  <Flex align={"center"} gap="4px">
                    <input name="female" value={input.gender} onChange={handleChange} type="radio" />
                    <Text fontSize={"14px"} fontWeight={"600"}>
                      Female
                    </Text>
                  </Flex>
                  <Flex align={"center"} gap="4px">
                    <input name="others" value={input.gender} onChange={handleChange} type="radio" />
                    <Text fontSize={"14px"} fontWeight={"600"}>
                      Others
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Input
                width={"70px"}
                type="number"
                isInvalid
                errorBorderColor="rgba(0, 0, 0, 0.19)"
                placeholder="Age"
                borderRadius={"0px"}
                onChange={handleChange}
                value={input.age}
                name="age"
              />
            </Flex>
            <InputGroup size="md">
              <Input
                isInvalid
                errorBorderColor="rgba(0, 0, 0, 0.19)"
                borderRadius={"none"}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                onChange={handleChange}
                value={input.password}
                name="password"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  bg={
                    show
                      ? "rgba(214, 154, 215, 0.934)"
                      : "rgba(226, 146, 146, 0.19)"
                  }
                  onClick={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Input
              type="number"
              isInvalid
              errorBorderColor="rgba(0, 0, 0, 0.19)"
              placeholder="Mobile"
              borderRadius={"0px"}
              onChange={handleChange}
              value={input.mobile}
              name="mobile"
            />
            <Button type="submit" colorScheme={"blue"}>
              Submit
            </Button>
            <NavLink
              to="/login"
              align={"center"}
              color="rgba(245, 8, 59, 0.926)"
            >
              Already have an account? click here to login
            </NavLink>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default SignUp;
