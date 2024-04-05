import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.100" py={8} textAlign="center">
      <Text>&copy; {new Date().getFullYear()} Acme Inc. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
