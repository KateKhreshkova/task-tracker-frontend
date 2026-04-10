import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const WelcomeBanner = () => {
    return (
        <MotionBox
            position="relative"
            w="100%"
            maxW={{ base: "350px", md: "450px", lg: "500px" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
        >
            {/* Decorative border frame */}
            <Box
                position="absolute"
                inset="-4px"
                borderRadius="2xl"
                bg="linear-gradient(135deg, rgba(34,197,94,0.4), rgba(59,130,246,0.2), rgba(34,197,94,0.4))"
                backgroundSize="200% 200%"
                opacity={0.6}
                css={{
                    animation: "gradientShift 4s ease infinite",
                    "@keyframes gradientShift": {
                        "0%": { backgroundPosition: "0% 50%" },
                        "50%": { backgroundPosition: "100% 50%" },
                        "100%": { backgroundPosition: "0% 50%" },
                    },
                }}
            />

            {/* Inner glow */}
            <Box
                position="absolute"
                inset="0"
                borderRadius="xl"
                boxShadow="inset 0 0 60px rgba(34,197,94,0.1)"
                pointerEvents="none"
                zIndex={2}
            />

            {/* Main image container */}
            <Box
                position="relative"
                borderRadius="xl"
                overflow="hidden"
                bg="gray.800"
                boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05)"
            >
                {/* Shine effect overlay */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    h="50%"
                    bg="linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)"
                    pointerEvents="none"
                    zIndex={1}
                />

                <Image
                    src="src/shared/assets/images/hero-image.png"
                    alt="Task Tracker Preview"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                    loading="eager"
                />
            </Box>

            {/* Bottom reflection effect */}
            <Box
                position="absolute"
                bottom="-20%"
                left="10%"
                right="10%"
                h="40%"
                bg="linear-gradient(180deg, rgba(34,197,94,0.15) 0%, transparent 100%)"
                filter="blur(20px)"
                borderRadius="full"
                opacity={0.5}
                transform="scaleY(-1)"
                pointerEvents="none"
            />
        </MotionBox>
    );
};