import {
    Box,
    Heading,
    Input,
    Textarea,
    Button,
    VStack, Spinner,
} from "@chakra-ui/react";
import {type FC, useState} from "react";

interface Props {
    onAdd: (task: { title: string; description: string }) => Promise<void>;
    isAdding?: boolean;
}

export const AddTaskPanel: FC<Props> = ({onAdd, isAdding = false}) => {
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");

    const handleAdd = async () => {
        try {
            await onAdd({title: title, description: detail});
            setTitle("");
            setDetail("");
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <Box p={8} bg="gray.800" minH="100%">
            <Heading size="md" mb={8} color="white">
                Add Task
            </Heading>

            <VStack gap={6} align="stretch">
                <Input
                    placeholder="Title"
                    variant="flushed"
                    onChange={(e) => setTitle(e.target.value)}
                    _focusVisible={{ borderColor: "green.400" }}
                />

                <Textarea
                    placeholder="Detail"
                    variant="flushed"
                    onChange={(e) => setDetail(e.target.value)}
                    _focusVisible={{ borderColor: "green.400" }}
                />

                <Button
                    size="lg"
                    colorScheme="green"
                    mt={6}
                    onClick={handleAdd}
                    disabled={isAdding}
                >
                    {isAdding ? <Spinner size="sm" /> : "ADD"}
                </Button>
            </VStack>
        </Box>
    );
};
