import { Box, SimpleGrid, VStack, Heading, Text, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Zap, Target, Sparkles } from "lucide-react";
import { FeaturePreviewCard } from "./FeaturePreviewCard";

const MotionBox = motion(Box);

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const FeaturePreviewSection = () => {
    const features = [
        {
            icon: Zap,
            title: "Simple & Fast",
            description: "Quickly add and manage tasks without distractions. Lightning-fast performance.",
            color: "#4ADE80",
            bgColor: "rgba(34,197,94,0.15)",
        },
        {
            icon: Target,
            title: "Stay Focused",
            description: "Prioritize your tasks and focus on what matters most. Achieve your goals.",
            color: "#60A5FA",
            bgColor: "rgba(59,130,246,0.15)",
        },
        {
            icon: Sparkles,
            title: "No Distractions",
            description: "Clean interface keeps you on track all day. Minimal design, maximum productivity.",
            color: "#F472B6",
            bgColor: "rgba(244,114,182,0.15)",
        },
    ];

    return (
        <VStack gap={10} w="100%">
            {/* Section Header */}
            <MotionBox
                textAlign="center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <HStack justify="center" mb={4}>
                    <Box
                        h="1px"
                        w={{ base: "40px", md: "60px" }}
                        bg="linear-gradient(90deg, transparent, rgba(34,197,94,0.5))"
                    />
                    <Text
                        color="green.400"
                        fontSize="sm"
                        fontWeight="600"
                        textTransform="uppercase"
                        letterSpacing="wider"
                    >
                        Why Choose Us
                    </Text>
                    <Box
                        h="1px"
                        w={{ base: "40px", md: "60px" }}
                        bg="linear-gradient(90deg, rgba(34,197,94,0.5), transparent)"
                    />
                </HStack>
                <Heading
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    color="white"
                    fontWeight="700"
                    mb={3}
                >
                    Everything you need to{" "}
                    <Text as="span" color="green.400">
                        stay productive
                    </Text>
                </Heading>
                <Text
                    color="gray.400"
                    fontSize={{ base: "sm", md: "md" }}
                    maxW="600px"
                    mx="auto"
                >
                    Built with simplicity in mind. No bloat, no complexity — just the tools you need.
                </Text>
            </MotionBox>

            {/* Feature Cards */}
            <MotionBox
                w="100%"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    gap={{ base: 6, md: 8 }}
                    w="100%"
                >
                    {features.map((feature, index) => (
                        <MotionBox key={index} variants={itemVariants}>
                            <FeaturePreviewCard
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                color={feature.color}
                                bgColor={feature.bgColor}
                                index={index + 1}
                            />
                        </MotionBox>
                    ))}
                </SimpleGrid>
            </MotionBox>
        </VStack>
    );
};