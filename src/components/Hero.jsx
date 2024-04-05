import { Box, Button, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box textAlign="center" py={20}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to Acme Inc.
      </Heading>
      <Text fontSize="xl" mb={8}>
        We provide top-notch solutions for your business needs.
      </Text>
      <Button colorScheme="blue" size="lg">
        Get Started
      </Button>
    </Box>
  );
};

export default Hero;
