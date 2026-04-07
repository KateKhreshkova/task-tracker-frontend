import {Center} from "@chakra-ui/react";
import {LoginForm} from "../../../widgets/login-form";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../../shared/lib/hooks/useAppSelector.ts";
import type {LoginPayload} from "../../../entities/user";
import {loginUser} from "../../../entities/user/model/thunks/loginUser.ts";
import {useNavigate} from "react-router-dom";
import {TASKS_ROUTE} from "../../../shared/config/consts.ts";

export const Login = () => {
    const dispatch = useAppDispatch();
    const { error, isLoading } = useAppSelector(state => state.user);
    const navigate = useNavigate();

    const handleSubmit = async (loginPayload : LoginPayload) => {
        try {
            await dispatch(loginUser(loginPayload)).unwrap();
            navigate(TASKS_ROUTE);
        } catch {
            // error handled in state
        }
    };
    return (
        <Center minH="100vh" bg="gray.900">
        <LoginForm onSubmit={handleSubmit} error={error?.message} isLoading={isLoading}/>
        </Center>
    );
};

