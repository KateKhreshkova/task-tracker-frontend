import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
    const navigate = useNavigate();

    return (
        <Button
            variant="greenPrimary"
            size="lg"
            w="400px"
            onClick={() => navigate("/login")}
        >
            Login
        </Button>
    );
};