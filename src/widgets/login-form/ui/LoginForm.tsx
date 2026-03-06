import {Input, InputGroup, Text} from "@chakra-ui/react";
import {AuthForm} from "../../../features/auth";
import {Link} from "react-router-dom";
import {REGISTER_ROUTE} from "../../../shared/config/consts.ts";
import {Lock, Mail} from "lucide-react";

export const LoginForm = () => {

    const handleSubmit = () => {
    };

    return (
        <AuthForm onSubmit={handleSubmit} buttonText="Login" title={"Log in"}
                  subtitle={"Enter your email and password to access your account."}>
            <InputGroup startElement={<Mail size={18}/>}>
                <Input
                    placeholder="Email"
                />
            </InputGroup>
            <InputGroup startElement={<Lock size={18}/>}>
                <Input
                    type="password"
                    placeholder="Confirm Password"
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

