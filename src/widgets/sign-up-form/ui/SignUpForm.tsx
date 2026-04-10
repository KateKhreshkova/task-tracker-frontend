import { Input, VStack, Text, InputGroup, Box, HStack } from "@chakra-ui/react";
import { AuthForm } from "../../../features/auth";
import { Lock, Mail, CheckCircle, XCircle } from "lucide-react";
import { useState, type FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../shared/config/consts.ts";
import type { LoginPayload } from "../../../entities/user";
import { ErrorMessage } from "../../../shared/ui/ErrorMessage.tsx";

interface Props {
    onSubmit: (payload: LoginPayload) => void;
    error?: string | null;
    isLoading?: boolean;
}

export const SignUpForm: FC<Props> = ({ onSubmit, error, isLoading }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formError, setFormError] = useState("");

    const passwordStrength = useMemo(() => {
        const checks = {
            length: password.length >= 8,
            hasNumber: /\d/.test(password),
            hasLetter: /[a-zA-Z]/.test(password),
        };
        return checks;
    }, [password]);

    const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            setFormError("Passwords do not match");
            return;
        }

        if (password.length < 8) {
            setFormError("Password must be at least 8 characters");
            return;
        }

        setFormError("");

        const payload: LoginPayload = {
            email,
            password,
        };
        onSubmit(payload);
    };

    const inputStyles = {
        bg: "gray.700",
        border: "1px solid",
        borderColor: "whiteAlpha.200",
        _hover: { borderColor: "whiteAlpha.400" },
        _focus: {
            borderColor: "green.400",
            boxShadow: "0 0 0 1px rgba(34, 197, 94, 0.3)",
            bg: "gray.700",
        },
        _placeholder: { color: "gray.500" },
        rounded: "xl",
        h: "48px",
        pl: "44px",
    };

    return (
        <AuthForm
            onSubmit={handleSubmit}
            buttonText="Create Account"
            title="Get Started"
            subtitle="Create your account to start managing tasks"
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
                            {...inputStyles}
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
                            placeholder="Create a strong password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            {...inputStyles}
                        />
                    </InputGroup>
                    {password.length > 0 && (
                        <VStack align="stretch" gap={1} mt={2}>
                            <HStack gap={2}>
                                {passwordStrength.length ? (
                                    <CheckCircle size={12} color="#4ADE80" />
                                ) : (
                                    <XCircle size={12} color="#9CA3AF" />
                                )}
                                <Text
                                    fontSize="xs"
                                    color={passwordStrength.length ? "green.400" : "gray.500"}
                                >
                                    At least 8 characters
                                </Text>
                            </HStack>
                            <HStack gap={2}>
                                {passwordStrength.hasLetter && passwordStrength.hasNumber ? (
                                    <CheckCircle size={12} color="#4ADE80" />
                                ) : (
                                    <XCircle size={12} color="#9CA3AF" />
                                )}
                                <Text
                                    fontSize="xs"
                                    color={
                                        passwordStrength.hasLetter && passwordStrength.hasNumber
                                            ? "green.400"
                                            : "gray.500"
                                    }
                                >
                                    Contains letters and numbers
                                </Text>
                            </HStack>
                        </VStack>
                    )}
                </Box>

                <Box>
                    <Text fontSize="xs" color="gray.400" mb={2} fontWeight="medium">
                        Confirm Password
                    </Text>
                    <InputGroup
                        startElement={
                            <Lock size={18} color="#9CA3AF" style={{ marginLeft: 4 }} />
                        }
                    >
                        <Input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            {...inputStyles}
                            borderColor={
                                confirmPassword.length > 0
                                    ? passwordsMatch
                                        ? "green.400"
                                        : "red.400"
                                    : "whiteAlpha.200"
                            }
                        />
                    </InputGroup>
                    {confirmPassword.length > 0 && !passwordsMatch && (
                        <HStack gap={2} mt={2}>
                            <XCircle size={12} color="#F87171" />
                            <Text fontSize="xs" color="red.400">
                                Passwords do not match
                            </Text>
                        </HStack>
                    )}
                    {passwordsMatch && (
                        <HStack gap={2} mt={2}>
                            <CheckCircle size={12} color="#4ADE80" />
                            <Text fontSize="xs" color="green.400">
                                Passwords match
                            </Text>
                        </HStack>
                    )}
                </Box>

                <ErrorMessage message={formError} />
                <ErrorMessage message={error} />
            </VStack>

            <Text fontSize="sm" color="gray.400" textAlign="center" mt={2}>
                Already have an account?{" "}
                <Link to={LOGIN_ROUTE}>
                    <Text
                        as="span"
                        color="green.400"
                        fontWeight="medium"
                        _hover={{ color: "green.300", textDecoration: "underline" }}
                        transition="all 0.2s"
                    >
                        Sign In
                    </Text>
                </Link>
            </Text>
        </AuthForm>
    );
};
