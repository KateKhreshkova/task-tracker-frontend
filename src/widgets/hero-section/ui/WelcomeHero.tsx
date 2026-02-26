import {VStack, HStack, Heading, Text} from "@chakra-ui/react";
import {LoginButton, SignUpButton} from "../../../features/auth";
import { WelcomeBanner } from "./WelcomeBanner";

export const WelcomeHero = () => {
    return (
        <HStack
            gap={16}
            bg="gray.700"
            p={12}
            rounded="2xl"
            shadow="xl"
            maxW="1100px"
            w="full"
        >
            <WelcomeBanner />

            <VStack align="start" gap={6} flex="1">
                <Heading size="xl" color="white">
                    Welcome to TODO APP
                </Heading>

                <Text color="gray.300" fontSize="lg">
                    Manage your tasks efficiently and stay organized.
                </Text>

                <VStack gap={4} align="start">
                    <LoginButton/>
                    <SignUpButton />
                </VStack>
            </VStack>
        </HStack>
        // <Box
        //     position="relative"
        //     minH="100vh"
        //     bgGradient="radial(circle at center, #4b5563 0%, #2f3542 100%)"
        //     _before={{
        //         content: '""',
        //         position: "absolute",
        //         inset: 0,
        //         backgroundImage: "url('/noise.png')",
        //         opacity: 0.05,
        //         mixBlendMode: "overlay",
        //         pointerEvents: "none",
        //     }}
        // > <Flex gap="60px" align="center">
        //     <WelcomeBanner/>
        //     <VStack gap={5}>
        //         <LoginButton/>
        //
        //         <SignUpButton/>
        //     </VStack>
        // </Flex></Box>
    );
};