import { Component, type ErrorInfo, type ReactNode } from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    state: ErrorBoundaryState = { hasError: false };

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("Unhandled UI error", error, info);
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <Box
                    minH="100vh"
                    bg="gray.900"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={6}
                >
                    <VStack spacing={3} maxW="lg" textAlign="center">
                        <Heading fontSize="2xl">Something went wrong</Heading>
                        <Text color="gray.400">
                            Please refresh the page. If the problem persists,
                            contact support.
                        </Text>
                        <Button colorScheme="green" onClick={this.handleReload}>
                            Reload
                        </Button>
                    </VStack>
                </Box>
            );
        }

        return this.props.children;
    }
}
