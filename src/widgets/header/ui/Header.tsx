import {Box, Container, Flex} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { CheckCircle   } from "lucide-react";

export const Header = () => {
    return (
        <Box position="sticky"
             top="0"
             zIndex="100"
             bg="gray.800"
             backdropFilter="blur(12px)"
             borderBottom="1px solid"
             borderColor="whiteAlpha.200">
            <Container maxW="100%" py={4}>
                <Flex align="center" gap={3} ml="5%">
                    <CheckCircle size={30} color="#22C55E"/>
                    <Text fontWeight="bold" color="#F9FAFB">TaskFlow</Text>
                </Flex>

            </Container>
        </Box>
    );
};

