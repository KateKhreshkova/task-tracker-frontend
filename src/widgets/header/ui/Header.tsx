import {Box, Container, Flex, Text} from "@chakra-ui/react";
import { CheckCircle   } from "lucide-react";
import { Link } from "react-router-dom";
import { SignUpButton} from "../../../features/auth";
import { ABOUT_ROUTE, MAIN_ROUTE } from "../../../shared/config/consts.ts";

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
                    <Link to={MAIN_ROUTE}>
                        <Flex align="center" gap={3} cursor="pointer">
                        <CheckCircle size={30} color="#22C55E" />
                        <Text fontWeight="bold" fontSize="lg" color="#F9FAFB">
                            TaskFlow
                        </Text>
                        </Flex>
                    </Link>

                    {/* Right side */}
                    <Flex align="center" gap={6}>
                        <Link to={ABOUT_ROUTE}>
                            <Text
                                color="gray.300"
                                cursor="pointer"
                                _hover={{ color: "white" }}
                                transition="0.2s"
                            >
                                About
                            </Text>
                        </Link>

                        <SignUpButton/>
                    </Flex>

                </Flex>
            </Container>
        </Box>
    );
};
