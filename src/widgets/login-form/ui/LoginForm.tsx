import { Input, InputGroup, Text, Box, VStack } from "@chakra-ui/react";
import { AuthForm } from "../../../features/auth";
import { Link } from "react-router-dom";
import { REGISTER_ROUTE } from "../../../shared/config/consts.ts";
import { Lock, Mail } from "lucide-react";
import type { LoginPayload } from "../../../entities/user";
import { type FC, useState } from "react";
import { ErrorMessage } from "../../../shared/ui/ErrorMessage.tsx";

interface Props {
    onSubmit: (payload: LoginPayload) => void;
    error?: string | null;
    isLoading?: boolean;
}

export const LoginForm: FC<Props> = ({ onSubmit, error, isLoading }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const payload: LoginPayload = {
            email,
            password,
        };
        onSubmit(payload);
    };

    return (
        <AuthForm
            onSubmit={handleSubmit}
            buttonText="Sign In"
            title="Welcome Back"
            subtitle="Enter your credentials to access your account"
            isLoading={isLoading}
        >
            <VStack gap={4} align="stretch">
                <Box>
                    <Text fontSize="xs" color="gray.400" mb={2} fontWeight="medium">
                        Email Address
                    </Text>
                    <InputGroup
                        startElement={
                            <Mail size={18} color="#9CA3AF" style={{ marginLeft: 4 }} />
                        }
                    >
                        <Input
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            bg="gray.700"
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            _hover={{ borderColor: "whiteAlpha.400" }}
                            _focus={{
                                borderColor: "green.400",
                                boxShadow: "0 0 0 1px rgba(34, 197, 94, 0.3)",
                                bg: "gray.700",
                            }}
                            _placeholder={{ color: "gray.500" }}
                            rounded="xl"
                            h="48px"
                            pl="44px"
                        />
                    </InputGroup>
                </Box>

                <Box>
                    <Text fontSize="xs" color="gray.400" mb={2} fontWeight="medium">
                        Password
                    </Text>
                    <InputGroup
                        startElement={
                            <Lock size={18} color="#9CA3AF" style={{ marginLeft: 4 }} />
                        }
                    >
                        <Input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            bg="gray.700"
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            _hover={{ borderColor: "whiteAlpha.400" }}
                            _focus={{
                                borderColor: "green.400",
                                boxShadow: "0 0 0 1px rgba(34, 197, 94, 0.3)",
                                bg: "gray.700",
                            }}
                            _placeholder={{ color: "gray.500" }}
                            rounded="xl"
                            h="48px"
                            pl="44px"
                        />
                    </InputGroup>
                </Box>

                <ErrorMessage message={error} />
            </VStack>

            <Text fontSize="sm" color="gray.400" textAlign="center" mt={2}>
                Don't have an account?{" "}
                <Link to={REGISTER_ROUTE}>
                    <Text
                        as="span"
                        color="green.400"
                        fontWeight="medium"
                        _hover={{ color: "green.300", textDecoration: "underline" }}
                        transition="all 0.2s"
                    >
                        Sign Up
                    </Text>
                </Link>
            </Text>
        </AuthForm>
    );
};

