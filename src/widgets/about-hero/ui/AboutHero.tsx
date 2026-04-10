import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { Info, Sparkles } from "lucide-react";

export const AboutHero = () => {
    return (
        <Box
            position="relative"
            overflow="hidden"
            bg="gray.800/50"
            border="1px solid"
            borderColor="whiteAlpha.100"
            rounded="2xl"
            p={{ base: 6, md: 8 }}
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                    "linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, transparent 50%, rgba(56, 189, 248, 0.05) 100%)",
                pointerEvents: "none",
            }}
        >
            {/* Decorative gradient line at top */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="3px"
                bgGradient="linear(to-r, green.400, teal.400, blue.400)"
                opacity={0.8}
            />

            <Stack gap={5} position="relative" zIndex={1}>
                {/* Header with icon */}
                <HStack gap={4} align="center">
                    <Box
                        p={3}
                        bg="green.400/10"
                        rounded="xl"
                        border="1px solid"
                        borderColor="green.400/20"
                        boxShadow="0 8px 24px rgba(34, 197, 94, 0.15)"
                    >
                        <Info size={24} color="#4ADE80" />
                    </Box>
                    <VStack align="start" gap={0.5}>
                        <HStack gap={2}>
                            <Sparkles size={14} color="#4ADE80" />
                            <Text
                                fontSize="xs"
                                letterSpacing="0.25em"
                                textTransform="uppercase"
                                color="green.300"
                                fontWeight="semibold"
                            >
                                About TaskFlow
                            </Text>
                        </HStack>
                        <Text
                            fontSize={{ base: "lg", md: "xl" }}
                            fontWeight="bold"
                            color="white"
                            letterSpacing="-0.02em"
                        >
                            Project Overview
                        </Text>
                    </VStack>
                </HStack>

                {/* Main heading with gradient */}
                <Heading
                    size={{ base: "xl", md: "2xl" }}
                    lineHeight="1.1"
                    maxW="560px"
                    fontWeight="800"
                    letterSpacing="-0.02em"
                >
                    TaskFlow keeps personal tasks{" "}
                    <Text
                        as="span"
                        bgGradient="linear(to-r, green.400, teal.300)"
                        bgClip="text"
                    >
                        organised and visible
                    </Text>
                </Heading>

                {/* Description paragraphs */}
                <Text
                    color="gray.200"
                    fontSize={{ base: "md", md: "lg" }}
                    maxW="560px"
                    lineHeight="1.7"
                >
                    TaskFlow lets users register, log in, create and manage tasks, and track their
                    progress — all through a clean, modern interface built for real focus.
                </Text>

                <Text
                    color="gray.400"
                    fontSize={{ base: "sm", md: "md" }}
                    maxW="520px"
                    lineHeight="1.7"
                >
                    Built on a microservices architecture with a React frontend, every piece is
                    designed to scale cleanly and stay out of your way.
                </Text>

                {/* Feature badges */}
                <HStack gap={3} flexWrap="wrap">
                    {["Modern UI", "Secure Auth", "Real-time Updates"].map((feature, index) => (
                        <Box
                            key={index}
                            px={3}
                            py={1.5}
                            bg="whiteAlpha.100"
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            rounded="full"
                            fontSize="xs"
                            color="gray.300"
                            fontWeight="medium"
                            _hover={{
                                bg: "whiteAlpha.200",
                                borderColor: "green.400/30",
                                color: "green.300",
                            }}
                            cursor="default"
                        >
                            {feature}
                        </Box>
                    ))}
                </HStack>
            </Stack>


        </Box>
    );
};