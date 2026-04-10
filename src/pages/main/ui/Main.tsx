import { Box } from "@chakra-ui/react";
import { Header } from "../../../widgets/header";
import { WelcomeHero } from "../../../widgets/hero-section";

export const Main = () => {
    return (
        <Box minH="100vh" display="flex" flexDirection="column" bg="gray.900">
            {/* Header with higher z-index to stay on top */}
            <Box position="relative" zIndex={100}>
                <Header />
            </Box>

            {/* Hero section takes remaining space */}
            <Box flex="1" position="relative">
                <WelcomeHero />
            </Box>
        </Box>
    );
};

