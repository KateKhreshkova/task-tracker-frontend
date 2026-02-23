import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
    const navigate = useNavigate();

    return (
        <Button
            colorScheme="green"
            size="lg"
            w="200px"
            onClick={() => navigate("/login")}
        >
            Login
        </Button>
    );
};