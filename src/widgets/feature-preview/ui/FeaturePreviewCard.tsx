import type { FC } from "react";
import type { LucideIcon } from "lucide-react";
import { Box, VStack, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface Props {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    bgColor: string;
    index: number;
}

export const FeaturePreviewCard: FC<Props> = ({
    icon: Icon,
    title,
    description,
    color,
    bgColor,
    index,
}) => {
    return (
        <MotionBox
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            bg="rgba(255,255,255,0.03)"
            backdropFilter="blur(12px)"
            border="1px solid rgba(255,255,255,0.06)"
            position="relative"
            overflow="hidden"
            h="100%"
            role="group"
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
            _hover={{
                boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px ${bgColor}`,
                borderColor: `${color}40`,
                bg: "rgba(255,255,255,0.05)",
            }}
        >
            {/* Glow effect on hover */}
            <Box
                position="absolute"
                top="-50%"
                left="-50%"
                w="200%"
                h="200%"
                bg={`radial-gradient(circle, ${bgColor}, transparent 60%)`}
                opacity={0}
                transition="opacity 0.4s ease"
                _groupHover={{ opacity: 0.6 }}
                pointerEvents="none"
            />

            {/* Index number */}
            <Text
                position="absolute"
                top={4}
                right={4}
                fontSize="xs"
                fontWeight="700"
                color="whiteAlpha.200"
                fontFamily="mono"
            >
                0{index}
            </Text>

            <VStack gap={4} position="relative" align="flex-start">
                {/* Icon container */}
                <Flex
                    w="56px"
                    h="56px"
                    borderRadius="xl"
                    bg={bgColor}
                    border={`1px solid ${color}30`}
                    align="center"
                    justify="center"
                    transition="all 0.3s ease"
                    _groupHover={{
                        transform: "scale(1.1) rotate(-5deg)",
                        boxShadow: `0 8px 24px ${bgColor}`,
                    }}
                >
                    <Icon size={26} color={color} />
                </Flex>

                {/* Title */}
                <Text
                    fontWeight="700"
                    fontSize={{ base: "lg", md: "xl" }}
                    color="white"
                    letterSpacing="-0.01em"
                >
                    {title}
                </Text>

                {/* Description */}
                <Text
                    color="gray.400"
                    fontSize={{ base: "sm", md: "md" }}
                    lineHeight="1.7"
                >
                    {description}
                </Text>

                {/* Bottom accent line */}
                <Box
                    position="absolute"
                    bottom={-8}
                    left={0}
                    w="40px"
                    h="3px"
                    bg={`linear-gradient(90deg, ${color}, transparent)`}
                    borderRadius="full"
                    opacity={0}
                    transition="all 0.3s ease"
                    _groupHover={{
                        opacity: 1,
                        w: "60px",
                    }}
                />
            </VStack>
        </MotionBox>
    );
};