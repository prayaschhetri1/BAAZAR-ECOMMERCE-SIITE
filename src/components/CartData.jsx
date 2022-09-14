import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Alert,
  AlertIcon,
  Tooltip,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { DeleteIcon } from "@chakra-ui/icons";

import axios from "axios";
import { deleteCartData, getCartData } from "./../redux/app/action";

const CartData = ({ item }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
      dispatch(deleteCartData(id)).then((res) => dispatch(getCartData()))
  };

  const handleCountInc = (item) => {
    const payload = {
      title: item.title,
      image: item.image,
      rating: item.rating,
      price: item.price,
      category: item.category,
      qty: item.qty + 1,
    };
    axios
      .patch(`https://json-server1122.herokuapp.com/bag/${item.id}`, payload)
      .then((res) => dispatch(getCartData(res)))
  };

  const handleCountDec = (item) => {
    const payload = {
      title: item.title,
      image: item.image,
      rating: item.rating,
      price: item.price,
      category: item.category,
      qty: item.qty - 1,
    };
    axios
      .patch(`https://json-server1122.herokuapp.com/bag/${item.id}`, payload)
      .then((res) => dispatch(getCartData(res)));
  };

  return (
    <>
      <Flex
        className="single-box"
        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        p="7px 10px 3px 3px"
        borderRadius="9px"
        justify={"space-between"}
      >
        <Flex
          justify={"space-between"}
          width={{ base: "90%", md: "75%", lg: "80%" }}
          gap={"20px"}
        >
          <Image
            borderTopRadius={"9px"}
            width={{ base: "140px", md: "140px", lg: "140px" }}
            height="100%"
            src={item.image}
            alt="pat-image"
          />
          <Flex
            width={{ base: "80%", md: "75%", lg: "60%" }}
            direction={"column"}
            gap="5px"
            pb="4px"
            justify={"space-between"}
          >
            <Text
              fontSize={{ base: "20px", md: "22px", lg: "26" }}
              fontWeight="700"
            >
              {item.title}
            </Text>
            <Text
              fontWeight={"700"}
              fontSize={{ base: "16px", md: "21px", lg: "24" }}
            >
              {item.category}
            </Text>
            <Text
              fontWeight={"700"}
              fontSize={{ base: "14px", md: "19px", lg: "22" }}
            >
              Rating: {item.rating}
            </Text>
            <Text
              fontWeight={"700"}
              fontSize={{ base: "14px", md: "19px", lg: "22" }}
            >
              MRP : ₹ {item.price}
            </Text>
            <Flex gap="7px" align={"center"}>
              <Button
                bg="black"
                color={"white"}
                borderRadius="50%"
                p="1px 3px"
                fontWeight={"800"}
                onClick={() => handleCountInc(item)}
              >
                +
              </Button>
              <Text border="1px solid grey" p="2px 10px">
                {item.qty}
              </Text>
              <Button
                disabled={item.qty === 1}
                bg="black"
                borderRadius="50%"
                p="1px 3px"
                fontWeight={"800"}
                color={"white"}
                onClick={() => handleCountDec(item)}
              >
                -
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Button
          gap="15px"
          p="20px 20px"
          className="delete_btn"
          color={"red"}
          fontWeight="700"
          _hover={{}}
          onClick={() => handleDelete(item.id)}
        >
          <Tooltip hasArrow label="Remove Item" color={"white"} bg="red.600">
            <DeleteIcon></DeleteIcon>
          </Tooltip>
        </Button>
      </Flex>
    </>
  );
};

export default CartData;
