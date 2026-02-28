import {Box, Container, Flex} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const Header = () => {
    return (
        <Box bg="#3a3d4c" py={4} boxShadow="
  inset 0 -8px 20px rgba(0,0,0,0.5),
  inset 8px 0 20px rgba(0,0,0,0.4),
  inset -8px 0 20px rgba(0,0,0,0.4)
"
        >
            <Container maxW="1200px" >
                <Flex align="center" gap={3}>
                    <Box
                        w="28px"
                        h="28px"
                        bg="white"
                        rounded="md"
                    />
                    <Text color="white" fontWeight="bold" fontSize="lg">
                        TODO APP
                    </Text>
                </Flex>
            </Container>
        </Box>
    );
};

