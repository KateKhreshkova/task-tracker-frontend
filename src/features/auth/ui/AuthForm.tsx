import { VStack, Button, Heading, Text, Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface AuthFormProps {
    children: ReactNode;
    onSubmit: () => void;
    buttonText: string;
    title?: string;
    subtitle?: string;
    isLoading?: boolean;
}

export const AuthForm = ({
    children,
    onSubmit,
    buttonText,
    title,
    subtitle,
    isLoading,
}: AuthFormProps) => {
    return (
        <MotionBox
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <VStack
                as="form"
                gap={6}
                bg="gray.800"
                p={{ base: 6, md: 10 }}
                rounded="2xl"
                shadow="0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                w={{ base: "90vw", sm: "420px", md: "460px" }}
                maxW="460px"
                align="stretch"
                color="white"
                position="relative"
                overflow="hidden"
                border="1px solid"
                borderColor="whiteAlpha.100"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
                _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #22C55E, #4ADE80, #22C55E)",
                    backgroundSize: "200% 100%",
                }}
            >
                {(title || subtitle) && (
                    <VStack gap={2} mb={2}>
                        {title && (
                            <Heading
                                fontSize={{ base: "24px", md: "28px" }}
                                textAlign="center"
                                bgGradient="linear(to-r, white, gray.300)"
                                bgClip="text"
                                fontWeight="bold"
                            >
                                {title}
                            </Heading>
                        )}

                        {subtitle && (
                            <Text
                                color="gray.400"
                                fontSize="sm"
                                textAlign="center"
                                maxW="300px"
                            >
                                {subtitle}
                            </Text>
                        )}
                    </VStack>
                )}

                <VStack gap={4} align="stretch">
                    {children}
                </VStack>

                <Button
                    type="submit"
                    colorScheme="green"
                    w="full"
                    size="lg"
                    loading={isLoading}
                    mt={2}
                    bg="linear-gradient(135deg, #4ADE80, #22C55E)"
                    _hover={{
                        bg: "linear-gradient(135deg, #6EE7A8, #16A34A)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
                    }}
                    _active={{
                        transform: "scale(0.98)",
                    }}
                    transition="all 0.2s ease"
                >
                    {buttonText}
                </Button>
            </VStack>
        </MotionBox>
    );
};
