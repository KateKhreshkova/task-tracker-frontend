import { Input, VStack, Text, InputGroup } from "@chakra-ui/react";
import { AuthForm } from "../../../features/auth";
import { Lock, Mail } from "lucide-react";
import { useState, type FC } from "react";
import {Link, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../../../shared/config/consts.ts";
import type {LoginPayload} from "../../../entities/user";
interface Props {
    onSubmit: (payload: LoginPayload) => void;
}
export const SignUpForm: FC<Props> = ({onSubmit}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");

        try {
            const payload: LoginPayload = {
                email,
                password,
            };
            onSubmit(payload);
            navigate(LOGIN_ROUTE)
        } catch (error) {
            console.error(error)
        }

    };

    return (
        <AuthForm
            onSubmit={handleSubmit}
            buttonText="Create Account"
            title="Create Account"
            subtitle="Sign up to get started"
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