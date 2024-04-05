import { Box, Container } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.lg" py={8}>
        <Hero />
        <Features />
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;
