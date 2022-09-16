import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Select,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const FilterDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchParams, setSearchParams] = useSearchParams();
  let initialCategory = searchParams.getAll("category");
  let initialSort = searchParams.getAll("sortBy");
  const initialSearch = searchParams.getAll("q")
  const [placement, setPlacement] = React.useState("left");
  const [category, setCategory] = useState(initialCategory || []);
  const [sortBy, setSortBy] = useState(initialSort[0] || "");
  
  const qdata =  useSelector(state=>state.app.search) 
  console.log(qdata)
  const [q,setQ] = useState(initialSearch || "")
  const handleCategory = (e) => {
    const value = [...category];
    if (value.includes(e.target.value)) {
      value.splice(value.indexOf(e.target.value), 1);
    } else {
      value.push(e.target.value);
    }
    setCategory(value);
  };

  useEffect(() => {
    if (category || sortBy || q) {
      let params = {};
      q && (params.q = q)
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);
   
      setSearchParams(params);
      setQ(qdata)
    }
  }, [category, setSearchParams, q,sortBy,qdata]);

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <button className="filter-btn" onClick={onOpen}>
        Filter By Category and Price
      </button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Filter</DrawerHeader>
          <DrawerBody>
            <Flex direction={"column"} mt="17px" gap="60px">
              <Flex direction={"column"} gap="30px">
                <Text fontSize={"22px"} fontWeight="600">
                  Category
                </Text>
                <Flex direction={"column"} gap="10px">
                  <Flex gap={"25px"} align="center">
                    <input
                      checked={category.includes("Jacket")}
                      onChange={handleCategory}
                      type="checkbox"
                      value="Jacket"
                    />
                    <Text fontSize={"17px"} fontWeight="600">
                      Jacket
                    </Text>
                  </Flex>
                  <Flex gap={"25px"} align="center">
                    <input
                      checked={category.includes("Shoes")}
                      onChange={handleCategory}
                      type="checkbox"
                      value="Shoes"
                    />
                    <Text fontSize={"17px"} fontWeight="600">
                      Shoes
                    </Text>
                  </Flex>{" "}
                  <Flex gap={"25px"} align="center">
                    <input
                      checked={category.includes("jwellary")}
                      onChange={handleCategory}
                      type="checkbox"
                      value="jwellary"
                    />
                    <Text fontSize={"17px"} fontWeight="600">
                      Jwellary
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction={"column"} gap="30px">
                <Text fontSize={"22px"} fontWeight="600">
                  Sort By Price
                </Text>
                <Flex align="center" justify={"space-between"}>
                  <Flex align="center" gap="10px">
                    <input
                      type="radio"
                      value="desc"
                      name="sortBy"
                      defaultChecked={sortBy === "desc"}
                      onChange={handleSort}
                    />
                    <Text fontSize={"17px"} fontWeight="600">
                      Hight To Low
                    </Text>
                  </Flex>
                  <Flex align="center" gap="10px">
                    <input
                      type="radio"
                      value="asc"
                      name="sortBy"
                      defaultChecked={sortBy === "asc"}
                      onChange={handleSort}
                    />
                    <Text fontSize={"17px"} fontWeight="600">
                      Low To High
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
