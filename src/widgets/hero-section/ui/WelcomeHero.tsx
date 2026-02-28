import {VStack, HStack, Heading, Text, Box} from "@chakra-ui/react";
import {LoginButton, SignUpButton} from "../../../features/auth";
import { WelcomeBanner } from "./WelcomeBanner";

export const WelcomeHero = () => {
    return (
        <HStack
            position="relative"
            overflow="hidden"
            gap={16}
            bg="#414757"
            p={12}
            shadow="xl"
            minH="100vh"
            w="full"
            justify="center"
            align="center"
        >
            {/* Texture layer */}
            <Box
                position="absolute"
                inset={0}
                backgroundImage="url('src/shared/assets/textures/noise.png')"
                opacity={0.25}
                pointerEvents="none"
            />

            {/* Content wrapper */}
            <HStack gap={16} w="full" position="relative" zIndex={1}>
                <WelcomeBanner />

                <VStack align="start" gap={6} flex="1">
                    <Heading
                        size="6xl"
                        color="white"
                        letterSpacing="1.5px"
                        alignSelf="flex-start"
                        ml="-10"
                    >
                        Welcome to <br/> TODO APP
                    </Heading>

                    <Text color="gray.300" fontSize="xlg">
                        Manage your tasks efficiently and stay organized.
                    </Text>

                    <VStack gap={4} align="start">
                        <LoginButton />
                        <SignUpButton />
                    </VStack>
                </VStack>
            </HStack>
        </HStack>

    );
};