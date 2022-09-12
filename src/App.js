import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <Box>
      <Navbar />
      <MainRoute />
    </Box>
  );
}

export default App;
