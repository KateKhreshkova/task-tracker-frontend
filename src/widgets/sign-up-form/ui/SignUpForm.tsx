import { Input } from "@chakra-ui/react";
import { AuthForm } from "../../../features/auth";

export const SignUpForm = () => {

    const handleSubmit = () => {
    };

    return (
        <AuthForm onSubmit={handleSubmit} buttonText="Sign Up">
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Confirm Password" type="password" />
        </AuthForm>
    );
};