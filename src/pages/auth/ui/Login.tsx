import {Center} from "@chakra-ui/react";
import {LoginForm} from "../../../widgets/login-form";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch.ts";
import type {LoginPayload} from "../../../entities/user";
import {loginUser} from "../../../entities/user/model/thunks/loginUser.ts";

export const Login = () => {
    const dispatch = useAppDispatch();
    const handleSubmit = (loginPayload : LoginPayload) => {
        dispatch(loginUser(loginPayload))
    }
    return (
        <Center minH="100vh" bg="gray.900">
        <LoginForm onSubmit={handleSubmit}/>
        </Center>
    );
};

