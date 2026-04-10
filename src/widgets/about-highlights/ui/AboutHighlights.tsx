import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { Code2, Database, Globe, Cpu } from "lucide-react";

const techStack = [
    { name: "React", icon: Code2, color: "blue.400" },
    { name: "Microservices", icon: Database, color: "purple.400" },
    { name: "REST API", icon: Globe, color: "green.400" },
    { name: "TypeScript", icon: Cpu, color: "cyan.400" },
];

export const AboutHighlights = () => {
    return (
        <Box
            bg="gray.800/60"
            border="1px solid"
            borderColor="whiteAlpha.150"
            rounded="2xl"
            p={{ base: 6, md: 7 }}
            boxShadow="0 22px 50px rgba(0,0,0,0.35)"
            position="relative"
            overflow="hidden"
            _hover={{
                borderColor: "whiteAlpha.300",
                transform: "translateY(-3px)",
                boxShadow: "0 28px 60px rgba(0,0,0,0.45)",
            }}
            css={{
                transition: "all 0.3s ease",
            }}
        >
            {/* Subtle gradient overlay */}
            <Box
                position="absolute"
                inset={0}
                bgGradient="linear(135deg, rgba(34, 197, 94, 0.03) 0%, transparent 60%)"
                pointerEvents="none"
            />

            <Stack gap={5} position="relative" zIndex={1}>
                {/* Header */}
                <VStack align="start" gap={2}>
                    <HStack gap={2}>
                        <Box
                            w="8px"
                            h="8px"
                            bg="green.400"
                            rounded="full"
                            boxShadow="0 0 12px rgba(34, 197, 94, 0.6)"
                        />
                        <Text
                            fontSize="xs"
                            letterSpacing="0.2em"
                            textTransform="uppercase"
                            color="green.300"
                            fontWeight="semibold"
                        >
                            Tech Stack
                        </Text>
                    </HStack>
                    <Text fontWeight="bold" color="white" fontSize={{ base: "lg", md: "xl" }}>
                        Designed for focus, clarity, and fast task management
                    </Text>
                </VStack>

                {/* Tech badges with icons */}
                <HStack gap={3} flexWrap="wrap">
                    {techStack.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                            <HStack
                                key={index}
                                px={4}
                                py={2.5}
                                rounded="xl"
                                bg="whiteAlpha.100"
                                border="1px solid"
                                borderColor="whiteAlpha.200"
                                gap={2}
                                cursor="default"
                                _hover={{
                                    bg: "whiteAlpha.200",
                                    borderColor: "whiteAlpha.300",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                                }}
                                css={{
                                    transition: "all 0.25s ease",
                                }}
                            >
                                <Box color={tech.color}>
                                    <IconComponent size={16} />
                                </Box>
                                <Text
                                    fontSize="sm"
                                    color="white"
                                    fontWeight="semibold"
                                >
                                    {tech.name}
                                </Text>
                            </HStack>
                        );
                    })}
                </HStack>

                {/* Additional info */}
                <Box
                    mt={2}
                    p={4}
                    bg="whiteAlpha.50"
                    rounded="xl"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                >
                    <HStack gap={4} flexWrap="wrap" justify="space-between">
                        <VStack align="start" gap={0}>
                            <Text color="gray.400" fontSize="xs" textTransform="uppercase" letterSpacing="0.1em">
                                Architecture
                            </Text>
                            <Text color="white" fontWeight="semibold" fontSize="sm">
                                Microservices
                            </Text>
                        </VStack>
                        <VStack align="start" gap={0}>
                            <Text color="gray.400" fontSize="xs" textTransform="uppercase" letterSpacing="0.1em">
                                Frontend
                            </Text>
                            <Text color="white" fontWeight="semibold" fontSize="sm">
                                React + Vite
                            </Text>
                        </VStack>
                        <VStack align="start" gap={0}>
                            <Text color="gray.400" fontSize="xs" textTransform="uppercase" letterSpacing="0.1em">
                                State
                            </Text>
                            <Text color="white" fontWeight="semibold" fontSize="sm">
                                Redux Toolkit
                            </Text>
                        </VStack>
                    </HStack>
                </Box>
            </Stack>
        </Box>
    );
};