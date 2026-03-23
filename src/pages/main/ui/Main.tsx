import { Box } from "@chakra-ui/react";
import { Header } from "../../../widgets/header";
import {WelcomeHero} from "../../../widgets/hero-section";

export const Main = () => {
    return (
        <Box h="100vh" display="flex" flexDirection="column">
            <Header />

            {/* Всё остальное занимает остаток экрана */}
            <Box flex="1" overflow="hidden">
                <WelcomeHero />
            </Box>
        </Box>

    );
};

