import {
    Box,
    Container,
    Flex,
    VStack,
    Heading,
    Text,
    HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, TrendingUp } from "lucide-react";

import { WelcomeBanner } from "./WelcomeBanner";
import { LoginButton, SignUpButton } from "../../../features/auth";
import { FeaturePreviewSection } from "../../feature-preview";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
};

const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.45, 0.05, 0.55, 0.95] as const,
    },
};

export const WelcomeHero = () => {
    return (
        <Box
            minH="calc(100vh - 70px)"
            bg="gray.900"
            position="relative"
            overflow="hidden"
            px={{ base: "4%", md: "6%", lg: "5%" }}
            py={{ base: 8, lg: 0 }}
        >
            {/* Animated gradient orbs */}
            <MotionBox
                position="absolute"
                top="-20%"
                right="-10%"
                w="600px"
                h="600px"
                bg="radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)"
                borderRadius="full"
                filter="blur(60px)"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <MotionBox
                position="absolute"
                bottom="-30%"
                left="-15%"
                w="500px"
                h="500px"
                bg="radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)"
                borderRadius="full"
                filter="blur(80px)"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Grid pattern overlay */}
            <Box
                position="absolute"
                inset={0}
                backgroundImage="linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)"
                backgroundSize="60px 60px"
                pointerEvents="none"
            />

            {/* Noise texture */}
            <Box
                position="absolute"
                inset={0}
                backgroundImage="url('src/shared/assets/textures/noise.png')"
                opacity={0.1}
                pointerEvents="none"
            />

            <Container
                maxW="1400px"
                h="100%"
                minH={{ base: "auto", lg: "100vh" }}
                display="flex"
                flexDirection="column"
                position="relative"
                zIndex={1}
                py={{ base: 4, lg: 8 }}
            >
                <MotionFlex
                    flex="1"
                    align="center"
                    justify="space-between"
                    gap={{ base: 12, lg: 16 }}
                    direction={{ base: "column", lg: "row" }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {/* LEFT - Image Section */}
                    <MotionBox
                        flex="1"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                        variants={itemVariants}
                        animate={floatingAnimation}
                        order={{ base: 2, lg: 1 }}
                    >
                        {/* Multi-layer glow effect */}
                        <Box
                            position="absolute"
                            w="80%"
                            h="80%"
                            bg="green.400"
                            opacity={0.2}
                            filter="blur(100px)"
                            borderRadius="50%"
                            zIndex={0}
                        />
                        <Box
                            position="absolute"
                            w="60%"
                            h="60%"
                            bg="green.300"
                            opacity={0.15}
                            filter="blur(60px)"
                            borderRadius="50%"
                            zIndex={0}
                        />

                        {/* Image container with decorative elements */}
                        <Box position="relative" zIndex={1}>
                            <WelcomeBanner />
                            
                            {/* Floating decorative badges */}
                            <MotionBox
                                position="absolute"
                                top={{ base: "-5%", lg: "-10%" }}
                                right={{ base: "-5%", lg: "-15%" }}
                                animate={{
                                    y: [-5, 5, -5],
                                    rotate: [-2, 2, -2],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Box
                                    bg="rgba(34,197,94,0.15)"
                                    backdropFilter="blur(10px)"
                                    border="1px solid rgba(34,197,94,0.3)"
                                    borderRadius="xl"
                                    px={4}
                                    py={2}
                                    display="flex"
                                    alignItems="center"
                                    gap={2}
                                >
                                    <CheckCircle size={18} color="#4ADE80" />
                                    <Text color="green.300" fontSize="sm" fontWeight="600">
                                        100% Free
                                    </Text>
                                </Box>
                            </MotionBox>

                            <MotionBox
                                position="absolute"
                                bottom={{ base: "5%", lg: "10%" }}
                                left={{ base: "-5%", lg: "-20%" }}
                                animate={{
                                    y: [5, -5, 5],
                                    rotate: [2, -2, 2],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Box
                                    bg="rgba(59,130,246,0.15)"
                                    backdropFilter="blur(10px)"
                                    border="1px solid rgba(59,130,246,0.3)"
                                    borderRadius="xl"
                                    px={4}
                                    py={2}
                                    display="flex"
                                    alignItems="center"
                                    gap={2}
                                >
                                    <TrendingUp size={18} color="#60A5FA" />
                                    <Text color="blue.300" fontSize="sm" fontWeight="600">
                                        Boost Productivity
                                    </Text>
                                </Box>
                            </MotionBox>
                        </Box>
                    </MotionBox>

                    {/* RIGHT - Content Section */}
                    <VStack
                        flex="1"
                        maxW={{ base: "100%", lg: "560px" }}
                        align={{ base: "center", lg: "flex-start" }}
                        textAlign={{ base: "center", lg: "left" }}
                        gap={8}
                        order={{ base: 1, lg: 2 }}
                    >
                        {/* Badge */}
                        <MotionBox variants={itemVariants}>
                            <HStack
                                bg="rgba(34,197,94,0.1)"
                                border="1px solid rgba(34,197,94,0.2)"
                                borderRadius="full"
                                px={4}
                                py={2}
                                gap={2}
                            >
                                <Sparkles size={16} color="#4ADE80" />
                                <Text color="green.300" fontSize="sm" fontWeight="500">
                                    Simple Task Management
                                </Text>
                            </HStack>
                        </MotionBox>

                        {/* Heading */}
                        <MotionBox variants={itemVariants}>
                            <Heading
                                fontSize={{
                                    base: "10vw",
                                    sm: "8vw",
                                    md: "5vw",
                                    lg: "3.5vw",
                                    xl: "3vw",
                                }}
                                color="white"
                                lineHeight="1.1"
                                fontWeight="800"
                                letterSpacing="-0.02em"
                            >
                                Stay organized.
                                <br />
                                <Text
                                    as="span"
                                    bgGradient="linear(to-r, green.400, green.300, teal.300)"
                                    bgClip="text"
                                >
                                    Get more done.
                                </Text>
                            </Heading>
                        </MotionBox>

                        {/* Description */}
                        <MotionBox variants={itemVariants}>
                            <Text
                                color="gray.400"
                                fontSize={{
                                    base: "4vw",
                                    sm: "3vw",
                                    md: "1.8vw",
                                    lg: "1.15vw",
                                }}
                                maxW="500px"
                                lineHeight="1.7"
                            >
                                Manage your tasks efficiently without the clutter. 
                                Simple, fast, and built to keep you focused on what 
                                truly matters.
                            </Text>
                        </MotionBox>

                        {/* Stats */}
                        <MotionBox variants={itemVariants} w="100%">
                            <HStack
                                gap={{ base: 4, md: 8 }}
                                justify={{ base: "center", lg: "flex-start" }}
                                flexWrap="wrap"
                            >
                                {[
                                    { value: "10K+", label: "Active Users" },
                                    { value: "50K+", label: "Tasks Completed" },
                                    { value: "99%", label: "Satisfaction" },
                                ].map((stat, index) => (
                                    <VStack key={index} gap={0}>
                                        <Text
                                            color="white"
                                            fontSize={{ base: "xl", md: "2xl" }}
                                            fontWeight="700"
                                        >
                                            {stat.value}
                                        </Text>
                                        <Text color="gray.500" fontSize="xs">
                                            {stat.label}
                                        </Text>
                                    </VStack>
                                ))}
                            </HStack>
                        </MotionBox>

                        {/* Buttons */}
                        <MotionBox variants={itemVariants} w="100%">
                            <HStack
                                gap={4}
                                w={{ base: "100%", sm: "80%", lg: "70%" }}
                                flexDirection={{ base: "column", sm: "row" }}
                            >
                                <Box flex="1" w="100%">
                                    <LoginButton />
                                </Box>
                                <Box flex="1" w="100%">
                                    <SignUpButton />
                                </Box>
                            </HStack>
                        </MotionBox>

                        {/* Trust indicators */}
                        <MotionBox variants={itemVariants}>
                            <HStack gap={2} color="gray.500" fontSize="sm">
                                <CheckCircle size={14} />
                                <Text>No credit card required</Text>
                                <Text>•</Text>
                                <Text>Free forever</Text>
                            </HStack>
                        </MotionBox>
                    </VStack>
                </MotionFlex>

                {/* Feature Section */}
                <MotionBox
                    py={{ base: 8, lg: 12 }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <FeaturePreviewSection />
                </MotionBox>
            </Container>
        </Box>
    );
};