import { Box, Container, SimpleGrid, Stack } from "@chakra-ui/react";
import { Header } from "../../../widgets/header";
import { AboutHero } from "../../../widgets/about-hero";
import { AboutHighlights } from "../../../widgets/about-highlights";
import { AboutLinks } from "../../../widgets/about-links";

export const About = () => {
    return (
        <Box minH="100vh" bg="gray.900" color="white" position="relative" overflow="hidden">
            {/* Enhanced gradient background */}
            <Box
                position="absolute"
                inset={0}
                bgGradient="radial(circle at 15% 12%, rgba(34,197,94,0.18), transparent 45%), radial(circle at 85% 5%, rgba(56,189,248,0.18), transparent 45%), radial(circle at 50% 80%, rgba(129,140,248,0.1), transparent 50%), linear(to-b, rgba(17,24,39,0.98), rgba(15,23,42,0.98))"
                pointerEvents="none"
            />

            {/* Decorative circle */}
            <Box
                position="absolute"
                top="-120px"
                right="-140px"
                w="420px"
                h="420px"
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.100"
                rounded="full"
                filter="blur(2px)"
                opacity={0.3}
                pointerEvents="none"
            />

            {/* Grid pattern overlay */}
            <Box
                position="absolute"
                inset={0}
                backgroundImage="linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)"
                backgroundSize="50px 50px"
                pointerEvents="none"
            />

            {/* Secondary decorative circle */}
            <Box
                position="absolute"
                bottom="-80px"
                left="-100px"
                w="300px"
                h="300px"
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.100"
                rounded="full"
                filter="blur(2px)"
                opacity={0.2}
                pointerEvents="none"
            />

            {/* Animated gradient orb effect (CSS only) */}
            <Box
                position="absolute"
                top="-15%"
                right="-10%"
                w="500px"
                h="500px"
                bg="radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)"
                borderRadius="full"
                filter="blur(60px)"
                pointerEvents="none"
                animation="pulse 8s ease-in-out infinite"
                css={{
                    "@keyframes pulse": {
                        "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
                        "50%": { opacity: 0.5, transform: "scale(1.15)" },
                    },
                }}
            />
            <Box
                position="absolute"
                bottom="-20%"
                left="-15%"
                w="450px"
                h="450px"
                bg="radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)"
                borderRadius="full"
                filter="blur(80px)"
                pointerEvents="none"
                animation="pulse2 10s ease-in-out infinite"
                css={{
                    "@keyframes pulse2": {
                        "0%, 100%": { opacity: 0.2, transform: "scale(1.1)" },
                        "50%": { opacity: 0.4, transform: "scale(1)" },
                    },
                }}
            />

            <Header />

            <Container maxW="1200px" py={{ base: 10, md: 16 }} position="relative" zIndex={1}>
                <SimpleGrid columns={{ base: 1, xl: 2 }} gap={{ base: 8, lg: 12, xl: 16 }}>
                    {/* Left column */}
                    <Stack gap={8}>
                        <AboutHero />
                        <AboutHighlights />
                    </Stack>

                    {/* Right column */}
                    <AboutLinks />
                </SimpleGrid>

                {/* Footer note */}
                <Box
                    mt={{ base: 12, md: 16 }}
                    textAlign="center"
                >
                    <Box
                        display="inline-flex"
                        alignItems="center"
                        gap={2}
                        px={4}
                        py={2}
                        bg="whiteAlpha.50"
                        border="1px solid"
                        borderColor="whiteAlpha.100"
                        rounded="full"
                        fontSize="sm"
                        color="gray.400"
                    >
                        <Box
                            w="6px"
                            h="6px"
                            bg="green.400"
                            rounded="full"
                            boxShadow="0 0 8px rgba(34, 197, 94, 0.6)"
                        />
                        Built with React, TypeScript & Chakra UI
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};