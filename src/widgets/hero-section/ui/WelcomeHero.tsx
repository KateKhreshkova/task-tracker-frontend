import {
    Box,
    Container,
    Flex,
    VStack,
    Heading,
    Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { WelcomeBanner } from "./WelcomeBanner";
import { LoginButton, SignUpButton } from "../../../features/auth";
import {FeaturePreviewSection} from "../../feature-preview";


const MotionBox = motion(Box);
const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export const WelcomeHero = () => {
    return (
        <Box
            h="100%"
            bg="gray.900"
            position="relative"
            overflow="hidden"
            px={{ base: "6%", lg: "5%" }}
        >


            {/* Noise */}
            <Box
                position="absolute"
                inset={0}
                backgroundImage="url('src/shared/assets/textures/noise.png')"
                opacity={0.15}
                pointerEvents="none"
            />

            <Container
                maxW="1400px"
                h="100%"
                display="flex"
                flexDirection="column"
                position="relative"
                zIndex={1}
            >
                <Flex
                    flex="1"
                    align="center"
                    justify="space-between"
                    gap={{ base: 10, lg: 16 }}
                    direction={{ base: "column", lg: "row" }}
                >
                    <MotionBox
                        flex="1"
                        display="flex"
                        justifyContent="center"
                        position="relative" // 👈 важно
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* 🔥 Glow ПРИВЯЗАН к картинке */}
                        <Box
                            position="absolute"
                            w="70%"
                            h="70%"
                            bg="green.400"
                            opacity={0.25}
                            filter="blur(120px)"
                            borderRadius="50%"
                            zIndex={0}
                        />

                        {/* Картинка */}
                        <Box position="relative" zIndex={1}>
                            <WelcomeBanner />
                        </Box>
                    </MotionBox>

                    {/* RIGHT CONTENT */}
                    <VStack
                        flex="1"
                        maxW="520px"
                        align={{ base: "center", lg: "flex-start" }}
                        textAlign={{ base: "center", lg: "left" }}
                        gap={6}
                    >
                        <MotionBox variants={item}>
                            <Heading
                                fontSize={{
                                    base: "8vw",
                                    md: "5vw",
                                    lg: "3vw",
                                }}
                                color="white"
                                lineHeight="1.1"
                                mb={4}
                            >
                                Stay organized.
                                <br />
                                Get more done.
                            </Heading>
                        </MotionBox>

                        {/* Text */}
                        <MotionBox variants={item}>
                            <Text
                                color="gray.400"
                                fontSize={{
                                    base: "4vw",
                                    md: "2vw",
                                    lg: "1.1vw",
                                }}
                                maxW="480px"
                                mb={6}
                            >
                                Manage your tasks efficiently without the
                                clutter. Simple, fast, and built to keep you
                                focused.
                            </Text>
                        </MotionBox>

                        {/* Buttons */}
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            w="100%"
                        >
                            <VStack gap={4} w={{ base: "100%", sm: "80%", lg: "60%" }}>
                                <LoginButton />
                                <SignUpButton />
                            </VStack>
                        </MotionBox>
                    </VStack>
                </Flex>

                {/* Feature Section */}
                <MotionBox
                    flex="0.6"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                >
                    <FeaturePreviewSection />
                </MotionBox>
            </Container>
        </Box>
    );
};
