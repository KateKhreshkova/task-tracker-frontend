import { Box, Container, SimpleGrid, Stack } from "@chakra-ui/react";
import { Header } from "../../../widgets/header";
import { AboutHero } from "../../../widgets/about-hero";
import { AboutHighlights } from "../../../widgets/about-highlights";
import { AboutLinks } from "../../../widgets/about-links";

export const About = () => {
    return (
        <Box minH="100vh" bg="gray.900" color="white" position="relative" overflow="hidden">
            <Box
                position="absolute"
                inset={0}
                bgGradient="radial(circle at 15% 12%, rgba(34,197,94,0.22), transparent 42%), radial(circle at 85% 0%, rgba(56,189,248,0.22), transparent 40%), linear(to-b, rgba(17,24,39,0.98), rgba(15,23,42,0.98))"
                pointerEvents="none"
            />
            <Box
                position="absolute"
                top="-120px"
                right="-140px"
                w="420px"
                h="420px"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                rounded="full"
                filter="blur(2px)"
                opacity={0.4}
                pointerEvents="none"
            />
            <Header />
            <Container maxW="1200px" py={{ base: 10, md: 16 }} position="relative">
                <SimpleGrid columns={{ base: 1, xl: 2 }} gap={{ base: 10, lg: 14, xl: 20 }}>
                    <Stack gap={10}>
                        <AboutHero />
                        <AboutHighlights />
                    </Stack>
                    <AboutLinks />
                </SimpleGrid>
            </Container>
        </Box>
    );
};
