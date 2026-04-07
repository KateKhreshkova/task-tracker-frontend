import {Center} from "@chakra-ui/react";
import { SignUpForm } from "../../../widgets/sign-up-form";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../../shared/lib/hooks/useAppSelector.ts";
import type {LoginPayload} from "../../../entities/user";
import {registerUser} from "../../../entities/user/model/thunks/registerUser.ts";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../../../shared/config/consts.ts";



export const Register = () => {
    const dispatch = useAppDispatch();
    const { error, isLoading } = useAppSelector(state => state.user);
    const navigate = useNavigate();

    const handleSubmit = async (loginPayload : LoginPayload) => {
        try {
            await dispatch(registerUser(loginPayload)).unwrap();
            navigate(LOGIN_ROUTE);
        } catch {
            // error handled in state
        }
    };
    return (
        <Center minH="100vh" bg="gray.900">
        <SignUpForm onSubmit={handleSubmit} error={error?.message} isLoading={isLoading} />
        </Center>
    );
};

