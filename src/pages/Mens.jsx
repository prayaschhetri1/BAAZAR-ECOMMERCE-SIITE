import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import FilterDrawer from "../components/FilterDrawer";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./../redux/app/action";
import MapData from "../components/MapData";
import { useLocation, useSearchParams } from "react-router-dom";
const Mens = () => {
  const location = useLocation();
  const data = useSelector((state) => state.app.data);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.app.isLoading);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const sortBy = searchParams.get("sortBy");
    let getParams = {
      params: {
        q: searchParams.get("q"),
        category: searchParams.getAll("category"),
        _sort: sortBy && "price",
        _order: sortBy,
      },
    };
    // console.log(getParams)
    dispatch(getData(getParams));
  }, [location.search]);

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
    <Box m={"100px auto"} width={{ base: "100%", md: "97%", lg: "90%" }}>
      <Box mb={"40px"}>
        <FilterDrawer />
      </Box>
      <SimpleGrid
        mt={"15px"}
        columns={{ base: 1, md: 2, lg: 4 }}
        m="15px auto"
        spacing={8}
      >
        {data.length &&
          data.map((item) => {
            return <MapData key={item.id} item={item} />;
          })}
      </SimpleGrid>
    </Box>
  );
};

export default Mens;
