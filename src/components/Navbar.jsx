import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex align="center" maxW="container.lg" mx="auto">
        <Heading as="h1" size="lg">
          Acme Inc.
        </Heading>
        <Spacer />
        <Box>
          <Link to="/" mx={4}>
            Home
          </Link>
          <Link to="/about" mx={4}>
            About
          </Link>
          <Link to="/contact" mx={4}>
            Contact
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
