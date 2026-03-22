import {Center} from "@chakra-ui/react";
import { SignUpForm } from "../../../widgets/sign-up-form";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch.ts";
import type {LoginPayload} from "../../../entities/user";
import {registerUser} from "../../../entities/user/model/thunks/registerUser.ts";



export const Register = () => {
    const dispatch = useAppDispatch();
    const handleSubmit = (loginPayload : LoginPayload) => {
        dispatch(registerUser(loginPayload))
    }
    return (
        <Center minH="100vh" bg="gray.900">
        <SignUpForm onSubmit={handleSubmit} />
        </Center>
    );
};

