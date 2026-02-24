import { Input } from "@chakra-ui/react";
import {AuthForm} from "../../../features/auth";

export const LoginForm = () => {

    const handleSubmit = () => {
    };

    return (
        <AuthForm onSubmit={handleSubmit} buttonText="Login">
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
        </AuthForm>
    );
};