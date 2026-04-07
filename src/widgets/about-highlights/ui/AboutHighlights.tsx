import { Box, Stack, Text } from "@chakra-ui/react";

export const AboutHighlights = () => {
    return (
        <Box
            bg="gray.800"
            border="1px solid"
            borderColor="whiteAlpha.200"
            rounded="2xl"
            p={{ base: 6, md: 7 }}
            boxShadow="0 22px 50px rgba(0,0,0,0.45)"
            transition="0.2s"
            _hover={{
                borderColor: "whiteAlpha.400",
                transform: "translateY(-2px)",
                boxShadow: "0 28px 60px rgba(0,0,0,0.5)",
            }}
        >
            <Text fontWeight="semibold" color="white" mb={4} fontSize="lg">
                Designed for focus, clarity, and fast task management
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} gap={3}>
                <Box
                    px={4}
                    py={2.5}
                    rounded="full"
                    bg="whiteAlpha.200"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    fontSize="sm"
                    color="white"
                    fontWeight="semibold"
                    transition="0.2s"
                    _hover={{ bg: "whiteAlpha.300", transform: "translateY(-1px)" }}
                >
                    React
                </Box>
                <Box
                    px={4}
                    py={2.5}
                    rounded="full"
                    bg="whiteAlpha.200"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    fontSize="sm"
                    color="white"
                    fontWeight="semibold"
                    transition="0.2s"
                    _hover={{ bg: "whiteAlpha.300", transform: "translateY(-1px)" }}
                >
                    Microservices
                </Box>
                <Box
                    px={4}
                    py={2.5}
                    rounded="full"
                    bg="whiteAlpha.200"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    fontSize="sm"
                    color="white"
                    fontWeight="semibold"
                    transition="0.2s"
                    _hover={{ bg: "whiteAlpha.300", transform: "translateY(-1px)" }}
                >
                    REST API
                </Box>
            </Stack>
        </Box>
    );
};
