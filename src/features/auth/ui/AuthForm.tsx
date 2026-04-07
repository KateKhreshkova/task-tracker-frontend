import {VStack, Button, Heading, Text} from "@chakra-ui/react";
import type {ReactNode} from "react";

interface AuthFormProps {
    children: ReactNode;
    onSubmit: () => void;
    buttonText: string;
    title?: string;
    subtitle?: string;
    isLoading?: boolean;
}

export const AuthForm = ({
                             children,
                             onSubmit,
                             buttonText,
                             title,
                             subtitle,
                             isLoading
                         }: AuthFormProps) => {
    return (
        <VStack
            as="form"
            gap={5}
            bg="gray.800"
            p={8}
            rounded="2xl"
            shadow="xl"
            w="35%"
            align="stretch"
            color="white"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
        >
            {(title || subtitle) && (
                <VStack gap={1}>
                    {title && (
                        <Heading fontSize="28px" textAlign="center">
                            {title}
                        </Heading>
                    )}

                    {subtitle && (
                        <Text color="gray.400" fontSize="sm" textAlign="center">
                            {subtitle}
                        </Text>
                    )}
                </VStack>
            )}

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
