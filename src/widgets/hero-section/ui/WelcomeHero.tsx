import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import {LoginButton, SignUpButton} from "../../../features/auth";

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
            {/* Иллюстрация */}
            <Box flex="1">
                <Box
                    bg="green.500"
                    w="300px"
                    h="350px"
                    rounded="xl"
                />
            </Box>

            {/* Текст + кнопки */}
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
    );
};