import type { FC } from "react";
import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface Props {
    title: string;
    description: string;
}

export const FeaturePreviewCard: FC<Props> = ({ description, title }) => {
    return (
        <MotionBox
            p={6}
            borderRadius="16px"
            bg="rgba(255,255,255,0.04)"
            backdropFilter="blur(12px)"
            border="1px solid rgba(255,255,255,0.08)"
            position="relative"
            overflow="hidden"
            textAlign="center"

            // ✨ hover анимация
            whileHover={{
                y: -6,
                scale: 1.02,
            }}

            transition={{ duration: 0.25 }}

            _hover={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                borderColor: "rgba(34,197,94,0.4)",
            }}
        >
            {/* 🔥 glow эффект внутри */}
            <Box
                position="absolute"
                top="-50%"
                left="-50%"
                w="200%"
                h="200%"
                bg="radial-gradient(circle, rgba(34,197,94,0.15), transparent 60%)"
                opacity={0}
                transition="opacity 0.3s"
                _groupHover={{ opacity: 1 }}
            />

            <VStack gap={3} position="relative">
                <HStack justify="center">
                    <Box
                        p={2}
                        borderRadius="10px"
                        bg="rgba(34,197,94,0.15)"
                    >
                        <Zap size={20} color="#4ADE80" />
                    </Box>

                    <Text
                        fontWeight="600"
                        fontSize="lg"
                        color="white"
                    >
                        {title}
                    </Text>
                </HStack>

                <Text
                    color="gray.400"
                    fontSize="sm"
                    lineHeight="1.6"
                >
                    {description}
                </Text>
            </VStack>
        </MotionBox>
    );
};