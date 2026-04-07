import { Box, Stack, Text } from "@chakra-ui/react";
import { ArrowUpRight, Layers, Zap } from "lucide-react";

export const AboutLinks = () => {
    return (
        <Stack gap={8} pb={{ base: 2, xl: 6 }}>
            <Box
                bg="gray.800"
                border="1px solid"
                borderColor="whiteAlpha.200"
                rounded="2xl"
                p={{ base: 6, md: 7 }}
                boxShadow="0 24px 56px rgba(0,0,0,0.45)"
                position="relative"
                overflow="hidden"
                transition="0.25s"
                _hover={{
                    borderColor: "whiteAlpha.400",
                    transform: "translateY(-3px)",
                    boxShadow: "0 30px 70px rgba(0,0,0,0.55)",
                }}
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="6px"
                    bgGradient="linear(to-r, rgba(34,197,94,0.95), rgba(56,189,248,0.9))"
                />
                <Stack gap={4}>
                    <Box
                        w="56px"
                        h="56px"
                        rounded="xl"
                        bg="green.400"
                        color="gray.900"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        boxShadow="0 10px 25px rgba(34,197,94,0.35)"
                    >
                        <Zap size={26} />
                    </Box>
                    <Box>
                        <Text fontWeight="bold" color="white" mb={2} fontSize="lg">
                            Digital innovation project
                        </Text>
                        <Text color="gray.300" mb={4}>
                            Created as part of a broader digital innovation initiative,
                            exploring modern full-stack patterns in a real deployed context.
                        </Text>
                        <Box
                            as="a"
                            href="https://digitalinnovationfreyberg.weebly.com/"
                            color="green.300"
                            fontWeight="semibold"
                            target="_blank"
                            rel="noreferrer"
                            display="inline-flex"
                            alignItems="center"
                            gap={2}
                            _hover={{ color: "green.200", transform: "translateY(-1px)" }}
                            transition="0.2s"
                        >
                            Digital innovation project site
                            <ArrowUpRight size={18} />
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Box
                bg="gray.800"
                border="1px solid"
                borderColor="whiteAlpha.200"
                rounded="2xl"
                p={{ base: 6, md: 7 }}
                boxShadow="0 24px 56px rgba(0,0,0,0.45)"
                position="relative"
                overflow="hidden"
                transition="0.25s"
                _hover={{
                    borderColor: "whiteAlpha.400",
                    transform: "translateY(-3px)",
                    boxShadow: "0 30px 70px rgba(0,0,0,0.55)",
                }}
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="6px"
                    bgGradient="linear(to-r, rgba(96,165,250,0.95), rgba(129,140,248,0.9))"
                />
                <Stack gap={4}>
                    <Box
                        w="56px"
                        h="56px"
                        rounded="xl"
                        bg="blue.300"
                        color="gray.900"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        boxShadow="0 10px 25px rgba(96,165,250,0.35)"
                    >
                        <Layers size={26} />
                    </Box>
                    <Box>
                        <Text fontWeight="bold" color="white" mb={2} fontSize="lg">
                            Project details
                        </Text>
                        <Text color="gray.300" mb={4}>
                            Full source code, architecture notes, and deployment docs are
                            available on GitHub — including CI/CD pipelines and API specs.
                        </Text>
                        <Box
                            as="a"
                            href="https://github.com/KateKhreshkova"
                            color="green.300"
                            fontWeight="semibold"
                            target="_blank"
                            rel="noreferrer"
                            display="inline-flex"
                            alignItems="center"
                            gap={2}
                            _hover={{ color: "green.200", transform: "translateY(-1px)" }}
                            transition="0.2s"
                        >
                            GitHub profile
                            <ArrowUpRight size={18} />
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
};
