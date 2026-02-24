import {Box, Heading, Text, VStack, HStack, Image} from "@chakra-ui/react";
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
            <Box flex="1">
                <Image src={"src/shared/assets/images/hero-image.png"}/>
            </Box>

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