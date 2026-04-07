import { Input, VStack, Text, InputGroup } from "@chakra-ui/react";
import { AuthForm } from "../../../features/auth";
import { Lock, Mail } from "lucide-react";
import { useState, type FC } from "react";
import {Link} from "react-router-dom";
import {LOGIN_ROUTE} from "../../../shared/config/consts.ts";
import type {LoginPayload} from "../../../entities/user";
interface Props {
    onSubmit: (payload: LoginPayload) => void;
    error?: string | null;
    isLoading?: boolean;
}
export const SignUpForm: FC<Props> = ({onSubmit, error, isLoading}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formError, setFormError] = useState("");

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            setFormError("Passwords do not match");
            return;
        }

        setFormError("");

        const payload: LoginPayload = {
            email,
            password,
        };
        onSubmit(payload);

    };

    return (
        <AuthForm
            onSubmit={handleSubmit}
            buttonText="Create Account"
            title="Create Account"
            subtitle="Sign up to get started"
            isLoading={isLoading}
        >
            <VStack gap={4} align="stretch">

                <InputGroup startElement={<Mail size={18}/>}>
                    <Input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputGroup>

                <InputGroup startElement={<Lock size={18}/>}>
                    <Input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputGroup>

                <InputGroup startElement={<Lock size={18}/>}>
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </InputGroup>

                {formError && (
                    <Text fontSize="sm" color="red.400">
                        {formError}
                    </Text>
                )}
                {error && (
                    <Text fontSize="sm" color="red.400">
                        {error}
                    </Text>
                )}

                <Text fontSize="sm" color="gray.400" textAlign="center">
                    Already have an account?{" "}
                    <Link color="green.400" to={LOGIN_ROUTE}>
                        Log In
                    </Link>
                </Text>

            </VStack>
        </AuthForm>
    );
};
