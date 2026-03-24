import { Box, Text, HStack, IconButton, Input } from "@chakra-ui/react";
import { Check, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import type { Task } from "../../../entities/task";
import type { FC } from "react";

interface Props {
    task: Task;
    onUpdate: (task: Task) => void;
}

const TaskCard: FC<Props> = ({ task, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const handleSave = () => {
        onUpdate({
            ...task,
            title,
            description,
        });
        setIsEditing(false);
    };

    return (
        <Box
            w="full"
            p={5}
            bg="gray.800"
            rounded="xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
            position="relative"
            overflow="hidden"
            transition="0.25s"
            _after={{
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "10%",
                width: "80%",
                height: "4px",
                background:
                    "linear-gradient(90deg, transparent, #22c55e, transparent)",
                filter: "blur(1px)"
            }}
            _hover={{
                bg: "gray.700",
                transform: "translateY(-2px)",
            }}
        >
            <HStack justify="space-between">

                {/* SAME layout, just conditional content */}
                <Box w="full">

                    {isEditing ? (
                        <>
                            <Input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                size="sm"
                                mb={1}
                                bg="gray.700"
                                color="white"
                                border="none"
                            />

                            <Input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                size="sm"
                                bg="gray.700"
                                color="white"
                                border="none"
                            />
                        </>
                    ) : (
                        <>
                            <Text fontWeight="bold" color="white">
                                {task.title}
                            </Text>

                            <Text fontSize="sm" color="gray.400">
                                {task.description}
                            </Text>
                        </>
                    )}

                </Box>

                <HStack>
                    {isEditing ? (
                        <IconButton
                            aria-label="save"
                            size="sm"
                            variant="ghost"
                            color="green.400"
                            _hover={{ color: "green.300", bg: "gray.600" }}
                            onClick={handleSave}
                        >
                            <Check size={16} />
                        </IconButton>
                    ) : (
                        <IconButton
                            aria-label="edit"
                            size="sm"
                            variant="ghost"
                            color="gray.300"
                            _hover={{ color: "white", bg: "gray.600" }}
                            onClick={() => setIsEditing(true)}
                        >
                            <Pencil size={16} />
                        </IconButton>
                    )}

                    <IconButton
                        aria-label="delete"
                        size="sm"
                        variant="ghost"
                        color="gray.300"
                        _hover={{ color: "red.300", bg: "gray.600" }}
                    >
                        <Trash2 size={16} />
                    </IconButton>
                </HStack>

            </HStack>
        </Box>
    );
};

export default TaskCard;