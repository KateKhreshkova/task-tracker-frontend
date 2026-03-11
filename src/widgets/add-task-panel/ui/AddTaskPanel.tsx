import {
    Box,
    Heading,
    Input,
    Textarea,
    Button,
    VStack,
} from "@chakra-ui/react";

export const AddTaskPanel = () => {
    return (
        <Box p={8} bg="gray.800" minH="100%">
            <Heading size="md" mb={8} color="white">
                Add Task
            </Heading>

            <VStack gap={6} align="stretch">
                <Input
                    placeholder="Title"
                    variant="flushed"
                    _focusVisible={{ borderColor: "green.400" }}
                />

                <Textarea
                    placeholder="Detail"
                    variant="flushed"
                    _focusVisible={{ borderColor: "green.400" }}
                />

                <Button
                    size="lg"
                    colorScheme="green"
                    mt={6}
                >
                    ADD
                </Button>
            </VStack>
        </Box>
    );
};