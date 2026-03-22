import {Input, InputGroup, Text} from "@chakra-ui/react";
import {AuthForm} from "../../../features/auth";
import {Link, useNavigate} from "react-router-dom";
import {REGISTER_ROUTE, TASKS_ROUTE} from "../../../shared/config/consts.ts";
import {Lock, Mail} from "lucide-react";
import type {LoginPayload} from "../../../entities/user";
import {type FC, useState} from "react";

interface Props {
    onSubmit: (payload: LoginPayload) => void;
}
export const LoginForm: FC<Props> = ({onSubmit}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();

    const handleSubmit = () => {
        try {
            const payload: LoginPayload = {
                email,
                password,
            };
            onSubmit(payload);
            navigate(TASKS_ROUTE)
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <AuthForm onSubmit={handleSubmit} buttonText="Login" title={"Log in"}
                  subtitle={"Enter your email and password to access your account."}>
            <InputGroup startElement={<Mail size={18}/>}>
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputGroup>
            <InputGroup startElement={<Lock size={18}/>}>
                <Input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputGroup>
            <Text fontSize="sm" color="gray.400" textAlign="center">
                Already have an account?{" "}
                <Link color="green.400" to={REGISTER_ROUTE}>
                    Sign Up
                </Link>
            </Text>
        </AuthForm>
    );
};

