import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {REGISTER_ROUTE} from "../../../shared/config/consts.ts";

export const SignUpButton = () => {
    const navigate = useNavigate();

    return (
        <Button

            variant="graySecondary"
            colorScheme="graySecondary"
            size="lg"
            w="200px"
            onClick={() => navigate(REGISTER_ROUTE)}
        >
            Sign Up
        </Button>
    );
};