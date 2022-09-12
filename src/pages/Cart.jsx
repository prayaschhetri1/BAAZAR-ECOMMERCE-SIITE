import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import { getCartData } from "./../redux/app/action";
import CartData from "./../components/CartData";

const Cart = () => {
  const data = useSelector((state) => state.app.cart);
  const [total, setTotal] = useState(0);
  const [gotDis,setGotDis] = useState(false)
  const dispatch = useDispatch();
  const [inputValue,setInputValue] = useState("")
  const isLoading = useSelector((state) => state.app.isLoading);
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/");
  };

  useEffect(() => {
    const total = data.reduce((alem, item) => {
      return alem + item.price * item.qty;
    }, 0);
    // console.log(data);
    setTotal(total);
  }, [total,data]);


// Discount 

const handleDiscount = () => {
    if(inputValue==="prayash@50"){
      alert("Congrats you got ₹50  of 😍")
      setGotDis(true)
     
    }
    setInputValue("")
}

const handleRedirectToCheckout = () => {
  navigate("/cart/checkout")
}

  if (isLoading) {
    return (
      <Flex m={"150px auto"} align={"center"} flexDirection="column">
        <Spinner size="xl" color="blue" />
        <Heading mt="10px" color={"blue"}>
          Loading...
        </Heading>
      </Flex>
    );
  }
  return (
    <>
      {data.length === 0 ? (
        <Flex direction={"column"} justify="center" align={"center"} mt="100px">
          <Heading color={"teal"}>YOUR CART IS EMPTY ☹</Heading>
          <Flex m="auto" justify={"center"}>
            <Image
              width={{ base: "350", md: "450", lg: "700px" }}
              src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?t=st=1655804193~exp=1655804793~hmac=a2ee60811649b0b2a67a5fb8438f27c0204534d05867745c9550cfefc9882fd1&w=996"
              alt=""
            />
          </Flex>
          <Button
            color={"white"}
            bg="blue"
            p="25px 40px"
            fontWeight={"700"}
            onClick={handleRedirect}
          >
            ADD SOMETHING IN CART
          </Button>
        </Flex>
      ) : (
        <>
          <Text align={"center"} color="white" bg="black" mt={{base:"64px",md:"69px",lg:"70px"}}>
            Use Code prayash@50 to get ₹50 off on your shopping😀
          </Text>
          <Flex
            m={"50px auto"}
            width="95%"
            direction={{ base: "column", md: "column", lg: "row" }}
          >
            <Flex
              boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              p="20px 5px 20px 20px"
              height={"520px"}
              overflow="auto"
              width={{ base: "90%", md: "75%", lg: "60%" }}
              m="auto"
            >
              <Scrollbars>
                <Flex
                  direction={"column"}
                  columns={{ base: 1, md: 2, lg: 4 }}
                  gap="15px"
                  width={"97%"}
                >
                  <Flex justifyContent={"space-between"}>
                    <Flex
                      border="1px solid grey"
                      width={{ sm: "200px", md: "250px", lg: "300px" }}
                      p={{ base: "3px", md: "6px", lg: "10px" }}
                      align="center"
                      justify={"center"}
                      fontWeight="700"
                      fontSize={{ base: "18px", md: "22px", lg: "25" }}
                      borderRadius={"5px"}
                    >
                      Total Item : {data.length}
                    </Flex>
                    <Flex
                      border="1px solid grey"
                      width={{ sm: "200px", md: "250px", lg: "300px" }}
                      p={{ base: "5px 10px", md: "5px 10px", lg: "10px 20px" }}
                      align="center"
                      justify={"center"}
                      fontWeight="700"
                      fontSize={{ base: "18px", md: "22px", lg: "25" }}
                      borderRadius={"5px"}
                    >
                      Total Price : ₹ {gotDis ? total-50 : total}
                    </Flex>
                  </Flex>
                  {data.length &&
                    data.map((item) => {
                      return <CartData item={item} key={item.id} />;
                    })}
                </Flex>
              </Scrollbars>
            </Flex>
            
              <Flex
                boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                height="310px"
                direction={"column"}
                width={{ base: "90%", md: "75%", lg: "35%" }}
                align="center"
                padding={"15px 20px"}
                gap="25px"
                m="0px auto"
              >
                <Text color="blue" fontWeight={"700"} fontSize={"22px"}>
                  Apply Code here
                </Text>
                <Flex width="90%" gap="10px">
                  <Input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Add code to for extra discount" />
                  <Button bg="blue" color="white" onClick={handleDiscount}>
                    Apply
                  </Button>
                </Flex>
                <Flex width="70%" justify={"space-between"}>
                  <Text fontWeight={"700"}>Estimated Price </Text>
                  <Text fontWeight={"700"}> {total} </Text>
                </Flex>
                <Flex width="70%" justify={"space-between"}>
                  <Text fontWeight={"700"}>Price after discount</Text>
                  <Text fontWeight={"700"}>{gotDis ? total-50 : total}</Text>
                </Flex>
                <Flex width="50%" align={"center"} m="auto" justify="center">
                  <Button bg="blue" color="white" onClick={handleRedirectToCheckout}>
                    Checkout
                  </Button>
                </Flex>
              </Flex>
            </Flex>
      
        </>
      )}
    </>
  );
};

export default Cart;
