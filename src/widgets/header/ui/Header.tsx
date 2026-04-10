import { Box, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { LayoutDashboard, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { SignUpButton } from "../../../features/auth";
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
            borderColor="whiteAlpha.100"
            overflow="hidden"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                    "linear-gradient(90deg, rgba(34, 197, 94, 0.03) 0%, transparent 50%, rgba(56, 189, 248, 0.03) 100%)",
                pointerEvents: "none",
            }}
        >
            <Container maxW="100%" py={{ base: 3, md: 4 }} position="relative" zIndex={1}>
                <Flex align="center" justify="space-between" px={{ base: "4%", md: "5%" }}>
                    {/* Logo Section */}
                    <Link to={MAIN_ROUTE}>
                        <HStack gap={3} align="center" cursor="pointer">
                            <Box
                                p={2.5}
                                bg="green.400/10"
                                rounded="xl"
                                border="1px solid"
                                borderColor="green.400/20"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <LayoutDashboard size={22} color="#4ADE80" />
                            </Box>
                            <VStack align="start" gap={0}>
                                <Text
                                    fontWeight="bold"
                                    fontSize={{ base: "lg", md: "xl" }}
                                    color="white"
                                    letterSpacing="-0.02em"
                                >
                                    TaskFlow
                                </Text>
                                <Text
                                    color="gray.400"
                                    fontSize="xs"
                                    display={{ base: "none", md: "block" }}
                                >
                                    Task Management
                                </Text>
                            </VStack>
                        </HStack>
                    </Link>

                    {/* Right side - Navigation */}
                    <HStack gap={{ base: 3, md: 6 }} align="center">
                        <Link to={ABOUT_ROUTE}>
                            <HStack
                                gap={2}
                                px={3}
                                py={2}
                                rounded="lg"
                                bg="transparent"
                                border="1px solid"
                                borderColor="transparent"
                                _hover={{
                                    bg: "whiteAlpha.100",
                                    borderColor: "whiteAlpha.200",
                                }}
                                css={{
                                    transition: "all 0.2s ease",
                                }}
                            >
                                <Info size={16} color="#9CA3AF" />
                                <Text
                                    color="gray.300"
                                    fontSize="sm"
                                    fontWeight="medium"
                                    _hover={{ color: "white" }}
                                >
                                    About
                                </Text>
                            </HStack>
                        </Link>

                        <SignUpButton />
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};