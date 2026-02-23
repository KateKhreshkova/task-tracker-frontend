import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const SignUpButton = () => {
    const navigate = useNavigate();

    return (
        <Button
            variant="outline"
            colorScheme="gray"
            size="lg"
            w="200px"
            onClick={() => navigate("/signup")}
        >
            Sign Up
        </Button>
    );
};