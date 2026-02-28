import { Image, VStack } from "@chakra-ui/react";

export const WelcomeBanner = () => {
    return (
        <VStack gap={6} alignContent="centre" justifyContent="center">
            <Image src={"src/shared/assets/images/hero-image.png"} w="80%"/>
        </VStack>
    );
};