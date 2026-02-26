import { Image, VStack } from "@chakra-ui/react";

export const WelcomeBanner = () => {
    return (
        <VStack gap={6} align="start">
            <Image src={"src/shared/assets/images/hero-image.png"} w="700px"/>
        </VStack>
    );
};