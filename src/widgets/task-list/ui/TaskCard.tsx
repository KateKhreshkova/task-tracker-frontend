import { Box, Text, HStack, IconButton, Input, Badge } from "@chakra-ui/react";
import { Check, CheckCircle, Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { Task } from "../../../entities/task";
import type { FC } from "react";

interface Props {
    task: Task;
    onUpdate: (task: Task) => void;
    onDelete: (task: Task) => void;
    onComplete: (task: Task) => void;
}

const TaskCard: FC<Props> = ({ task, onUpdate, onDelete, onComplete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    useEffect(() => {
        setTitle(task.title);
        setDescription(task.description);
    }, [task.description, task.title]);

    const statusLabel = task.status ?? "UNKNOWN";
    const statusColor =
        task.status === "DONE" ? "green" : task.status === "PENDING" ? "yellow" : "gray";
    const isDone = task.status === "DONE";

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
            p={{ base: 4, md: 5 }}
            bg="gray.800"
            rounded="2xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
            position="relative"
            overflow="hidden"
            transition="0.25s"
            boxShadow="0 12px 30px rgba(0,0,0,0.25)"
            _before={{
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                    "linear-gradient(135deg, rgba(56, 189, 248, 0.08), rgba(34, 197, 94, 0.08), transparent 55%)",
                opacity: 0.9,
                pointerEvents: "none",
            }}
            _after={{
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "8%",
                width: "84%",
                height: "3px",
                background:
                    "linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.7), transparent)",
                filter: "blur(1px)",
                opacity: 0.8,
            }}
            _hover={{
                bg: "gray.700",
                borderColor: "whiteAlpha.300",
                transform: "translateY(-3px)",
            }}
        >
            <HStack justify="space-between" position="relative">

                {/* SAME layout, just conditional content */}
                <Box w="full">

                    {isEditing ? (
                        <>
                            <Input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                size="sm"
                                mb={2}
                                bg="gray.700"
                                color="white"
                                border="1px solid"
                                borderColor="whiteAlpha.200"
                                _focus={{
                                    borderColor: "whiteAlpha.400",
                                    boxShadow: "0 0 0 1px rgba(255,255,255,0.25)",
                                }}
                            />

                            <Input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                size="sm"
                                bg="gray.700"
                                color="white"
                                border="1px solid"
                                borderColor="whiteAlpha.200"
                                _focus={{
                                    borderColor: "whiteAlpha.400",
                                    boxShadow: "0 0 0 1px rgba(255,255,255,0.25)",
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <HStack spacing={2.5} align="center">
                                <Box
                                    w="8px"
                                    h="8px"
                                    rounded="full"
                                    bg={`${statusColor}.400`}
                                    boxShadow={`0 0 0 3px rgba(255,255,255,0.06)`}
                                    flexShrink={0}
                                />
                                <Text fontWeight="semibold" color="white" noOfLines={1}>
                                    {task.title}
                                </Text>
                                <Badge
                                    colorScheme={statusColor}
                                    variant="subtle"
                                    px={2}
                                    py={0.5}
                                    rounded="full"
                                    fontSize="xs"
                                >
                                    {statusLabel}
                                </Badge>
                            </HStack>

                            <Text fontSize="sm" color="gray.300" mt={1} noOfLines={2}>
                                {task.description}
                            </Text>
                        </>
                    )}

                </Box>

                <HStack>
                    {!isEditing && !isDone && (
                        <IconButton
                            aria-label="mark done"
                            size="sm"
                            variant="ghost"
                            color="green.300"
                            _hover={{ color: "green.200", bg: "gray.600" }}
                            onClick={() => onComplete(task)}
                        >
                            <CheckCircle size={16} />
                        </IconButton>
                    )}
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
                        onClick={() => onDelete(task)}
                    >
                        <Trash2 size={16} />
                    </IconButton>
                </HStack>

            </HStack>
        </Box>
    );
};

export default TaskCard;
