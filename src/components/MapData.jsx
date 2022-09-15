import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postCartData } from "../redux/app/action";

const MapData = ({ item }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    const payload = {
      title: item.title,
      image: item.image,
      rating: item.rating,
      price: item.price,
      category: item.category,
      qty: 1,
    };
    if (!isAdded) {
      dispatch(postCartData(payload));
      alert("Item added to the cart😍");
      setIsAdded(true);
    } else {
      alert("Already Added your item ☺️");
    }
  };

  // Modal

  return (
    <>
      <Modal
        size={{ base: "sm", md: "md", lg: "3xl" }}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="blackAlpha.700" color={"white"} p="10px">
            ADD TO CART
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody>
            <Flex gap="30px">
              <Image
                height={{ base: "50%", md: "100%", lg: "100%" }}
                w={{ base: "100px", md: "200px", lg: "200px" }}
                src={item.image}
              />
              <Flex direction={"column"} justify="space-between">
                <Flex direction={"column"} gap="40px">
                  <Flex direction={"column"} gap="10px">
                    <Text fontWeight={"700"} fontSize="33px">
                      {item.title}
                    </Text>
                    <Text fontSize="20px" fontWeight={"700"} color="red.600">
                      {item.category}
                    </Text>
                    <Text fontSize="17px" fontWeight={"700"} color="grey">
                      {item.description}
                    </Text>
                  </Flex>
                  <Flex direction={"column"} gap="10px">
                    <Text color={"grey"} textDecoration={"line-through"}>
                      MRP: ₹{item.price + (item.price / 100) * 15}{" "}
                    </Text>

                    <Text fontWeight={"700"}>
                      Selling Price: ₹{item.price}{" "}
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap="10px">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="cart-btn"
                  >
                    ADD TO CART
                  </button>

                  <button className="close-btn" onClick={onClose}>
                    Close
                  </button>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex
        m="auto"
        direction={"column"}
        width={{ base: "320px", md: "320px", lg: "320px" }}
        paddingBottom="15px"
        className="box-image"
      >
        <Image width="100%" src={item.image} height="300px" />
        <Box className="quick-shop">
          <button onClick={onOpen}>QUICK SHOP</button>
        </Box>
        <Box p="5px">
          <Flex mt="5px" justify={"space-between"}>
            <Text fontSize={"20px"} fontWeight="600">
              {item.title}
            </Text>
            <Text bg="red" borderRadius={"15px"} color="white" p="2px 10px">
              {item.category}
            </Text>
          </Flex>
          <Flex mt="3px" justify={"space-between"}>
            <Flex gap={"8px"}>
              <Text color={"grey"} textDecoration={"line-through"}>
                MRP: ₹{item.price + (item.price / 100) * 15}
              </Text>
              <Text fontWeight={"700"}>Selling Price: ₹{item.price} </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default MapData;
