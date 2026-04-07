import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export const AboutHero = () => {
    return (
        <Stack gap={4}>
            <Text
                fontSize="sm"
                letterSpacing="0.35em"
                textTransform="uppercase"
                color="green.300"
                fontWeight="semibold"
            >
                About TaskFlow
            </Text>
            <Heading size="2xl" lineHeight="1.05" maxW="520px">
                TaskFlow keeps personal tasks organised and visible
            </Heading>
            <Text color="gray.200" fontSize={{ base: "md", md: "lg" }} maxW="560px">
                TaskFlow lets users register, log in, create and manage tasks, and track their
                progress — all through a clean, modern interface built for real focus.
            </Text>
            <Text color="gray.400" fontSize={{ base: "sm", md: "md" }} maxW="520px">
                Built on a microservices architecture with a React frontend, every piece is
                designed to scale cleanly and stay out of your way.
            </Text>
        </Stack>
    );
};
