import { Box, HStack, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X } from "lucide-react";
import type { FC } from "react";

const MotionBox = motion.create(Box);

interface ErrorMessageProps {
    message: string | null | undefined;
    onDismiss?: () => void;
    variant?: "inline" | "banner";
}

export const ErrorMessage: FC<ErrorMessageProps> = ({
    message,
    onDismiss,
    variant = "inline",
}) => {
    if (!message) return null;

    const isBanner = variant === "banner";

    return (
        <AnimatePresence>
            {message && (
                <MotionBox
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    bg="linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(185, 28, 28, 0.1) 100%)"
                    border="1px solid"
                    borderColor="red.500/40"
                    rounded={isBanner ? "lg" : "xl"}
                    p={isBanner ? 4 : 3}
                    position="relative"
                    overflow="hidden"
                    _before={{
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "4px",
                        height: "100%",
                        bg: "red.500",
                        borderRadius: "4px 0 0 4px",
                    }}
                >
                    <HStack gap={3} align="flex-start">
                        <Box
                            p={2}
                            bg="red.500/20"
                            rounded="lg"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexShrink={0}
                        >
                            <AlertCircle size={isBanner ? 20 : 16} color="#F87171" />
                        </Box>
                        <Box flex={1} pt={isBanner ? 1 : 0.5}>
                            {isBanner && (
                                <Text
                                    fontSize="sm"
                                    fontWeight="semibold"
                                    color="red.300"
                                    mb={1}
                                >
                                    Error
                                </Text>
                            )}
                            <Text
                                fontSize={isBanner ? "sm" : "xs"}
                                color="red.200"
                                lineHeight="tall"
                            >
                                {message}
                            </Text>
                        </Box>
                        {onDismiss && (
                            <Box
                                as="button"
                                onClick={onDismiss}
                                p={1.5}
                                rounded="md"
                                bg="transparent"
                                _hover={{ bg: "red.500/20" }}
                                transition="all 0.2s"
                                cursor="pointer"
                                flexShrink={0}
                            >
                                <X size={14} color="#FCA5A5" />
                            </Box>
                        )}
                    </HStack>
                </MotionBox>
            )}
        </AnimatePresence>
    );
};