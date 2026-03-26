import {Box, Container, Flex} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { CheckCircle   } from "lucide-react";
import { SignUpButton} from "../../../features/auth";

export const Header = () => {
    return (
        <Box
            position="sticky"
            top="0"
            zIndex="100"
            bg="gray.800"
            backdropFilter="blur(12px)"
            borderBottom="1px solid"
            borderColor="whiteAlpha.200"
        >
            <Container maxW="100%" py={4}>
                <Flex align="center" justify="space-between" px="5%">

                    {/* Logo */}
                    <Flex align="center" gap={3}>
                        <CheckCircle size={30} color="#22C55E" />
                        <Text fontWeight="bold" fontSize="lg" color="#F9FAFB">
                            TaskFlow
                        </Text>
                    </Flex>

                    {/* Right side */}
                    <Flex align="center" gap={6}>
                        <Text
                            color="gray.300"
                            cursor="pointer"
                            _hover={{ color: "white" }}
                            transition="0.2s"
                        >
                            About
                        </Text>

                        <SignUpButton/>
                    </Flex>

                </Flex>
            </Container>
        </Box>
    );
};

