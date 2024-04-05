import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import { FaCode, FaChartLine, FaShieldAlt } from "react-icons/fa";

const Features = () => {
  return (
    <Box py={20}>
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        Our Features
      </Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        <Box textAlign="center">
          <FaCode size={48} />
          <Heading as="h3" size="lg" mt={4} mb={2}>
            Clean Code
          </Heading>
          <Text>We write clean, maintainable code for our projects.</Text>
        </Box>
        <Box textAlign="center">
          <FaChartLine size={48} />
          <Heading as="h3" size="lg" mt={4} mb={2}>
            Data Analytics
          </Heading>
          <Text>Gain insights from your data with our analytics tools.</Text>
        </Box>
        <Box textAlign="center">
          <FaShieldAlt size={48} />
          <Heading as="h3" size="lg" mt={4} mb={2}>
            Secure Platform
          </Heading>
          <Text>Your data is safe with our secure infrastructure.</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Features;
