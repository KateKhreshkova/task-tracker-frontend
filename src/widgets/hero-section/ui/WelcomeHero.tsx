import {
    Box,
    Container,
    Flex,
    VStack,
    Heading,
    Text,
} from "@chakra-ui/react";
import {WelcomeBanner} from "./WelcomeBanner.tsx";
import {LoginButton, SignUpButton} from "../../../features/auth";

export const WelcomeHero = () => {
    return (
        <Box
            position="relative"
            minH="100vh"
            bg="gray.900"
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            px="5%"
        >
            <Box
                position="absolute"
                inset={0}
                backgroundImage="url('src/shared/assets/textures/noise.png')"
                opacity={0.2}
                pointerEvents="none"
            />


            {/* Content container */}
            <Container maxW="100%" position="relative" zIndex={1}>
                <Flex
                    align="center"
                    justify="space-between"
                    gap="5%"
                    direction={{ base: "column", lg: "row" }}
                >
                    {/* LEFT: Image */}
                    <Box flex="50%" display="flex" justifyContent="center">
                        <WelcomeBanner  />
                    </Box>

                    {/* RIGHT: Text */}
                    <VStack
                        flex="50%"
                        align={{ base: "center", lg: "flex-start" }}
                        textAlign={{ base: "center", lg: "left" }}
                        gap="2%"
                    >
                        <Heading
                            fontSize={{ base: "8vw", lg: "4vw" }}
                            color="white"
                            lineHeight="1.2"
                        >
                            Stay organized. <br />
                            Get more done.
                        </Heading>

                        <Text
                            color="gray.400"
                            fontSize={{ base: "4vw", lg: "1.25vw" }}
                            maxW="90%" // responsive max width
                        >
                            Manage your tasks efficiently without the clutter.
                        </Text>

                        <VStack gap="1%" align="stretch" w="60%">
                            <LoginButton  />
                            <SignUpButton/>
                        </VStack>

                    </VStack>
                </Flex>
            </Container>
        </Box>
    );
};