import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <Box>
      <Navbar />
      <MainRoute />
      <Footer/>
    </Box>
  );
}

export default App;
