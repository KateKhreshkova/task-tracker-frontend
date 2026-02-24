import { VStack, Button } from "@chakra-ui/react";
import type {ReactNode} from "react";

interface AuthFormProps {
    children: ReactNode;
    onSubmit: () => void;
    buttonText: string;
    isLoading?: boolean;
}

export const AuthForm = ({
                             children,
                             onSubmit,
                             buttonText,
                             isLoading
                         }: AuthFormProps) => {
    return (
        <VStack
            as="form"
            gap={4}
            bg="gray.800"
            p={8}
            rounded="2xl"
            shadow="xl"
            w="400px"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
        >
            {children}

            <Button
                type="submit"
                colorScheme="green"
                w="full"
                loading={isLoading}
            >
                {buttonText}
            </Button>
        </VStack>
    );
};