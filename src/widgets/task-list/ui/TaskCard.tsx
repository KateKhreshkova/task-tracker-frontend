import { Box, Text, HStack, IconButton, Input, Badge, VStack } from "@chakra-ui/react";
import { Check, CheckCircle, Pencil, Trash2, X } from "lucide-react";
import { useState } from "react";
import type { Task } from "../../../entities/task";
import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

interface Props {
    task: Task;
    onUpdate: (task: Task) => void;
    onDelete: (task: Task) => void;
    onComplete: (task: Task) => void;
}

const TaskCard: FC<Props> = ({ task, onUpdate, onDelete, onComplete }) => {
    const [isEditing, setIsEditing] = useState(false);
    // Use task values directly when not editing, local state only for edit mode
    const [editTitle, setEditTitle] = useState(task.title);
    const [editDescription, setEditDescription] = useState(task.description);
    const [isHovered, setIsHovered] = useState(false);

    const statusLabel = task.status ?? "UNKNOWN";
    const statusColor =
        task.status === "DONE" ? "green" : task.status === "PENDING" ? "yellow" : "gray";
    const isDone = task.status === "DONE";

    const handleStartEdit = () => {
        setEditTitle(task.title);
        setEditDescription(task.description);
        setIsEditing(true);
    };

    const handleSave = () => {
        onUpdate({
            ...task,
            title: editTitle,
            description: editDescription,
        });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <MotionBox
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Box
                w="full"
                p={{ base: 4, md: 5 }}
                bg={isDone ? "gray.800/60" : "gray.800"}
                rounded="2xl"
                border="1px solid"
                borderColor={isHovered ? "whiteAlpha.300" : "whiteAlpha.100"}
                position="relative"
                overflow="hidden"
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                boxShadow={isHovered ? "0 20px 40px rgba(0,0,0,0.3)" : "0 8px 20px rgba(0,0,0,0.2)"}
                opacity={isDone ? 0.75 : 1}
                _before={{
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: isDone
                        ? "linear-gradient(135deg, rgba(34, 197, 94, 0.05), transparent 40%)"
                        : "linear-gradient(135deg, rgba(56, 189, 248, 0.06), rgba(34, 197, 94, 0.06), transparent 50%)",
                    opacity: isHovered ? 1 : 0.7,
                    pointerEvents: "none",
                    transition: "opacity 0.3s ease",
                }}
                _after={{
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "10%",
                    width: "80%",
                    height: "2px",
                    background: isDone
                        ? "linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.5), transparent)"
                        : "linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.6), transparent)",
                    filter: "blur(1px)",
                    opacity: isHovered ? 1 : 0.6,
                    transition: "opacity 0.3s ease",
                }}
                transform={isHovered ? "translateY(-4px)" : "translateY(0)"}
            >
                <HStack justify="space-between" position="relative" align="flex-start">
                    {/* Task content */}
                    <Box w="full" pr={4}>
                        <AnimatePresence mode="wait">
                            {isEditing ? (
                                <MotionBox
                                    key="editing"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <VStack gap={3} align="stretch">
                                        <Input
                                            value={editTitle}
                                            onChange={(e) => setEditTitle(e.target.value)}
                                            size="sm"
                                            bg="gray.700"
                                            color="white"
                                            border="1px solid"
                                            borderColor="green.400/50"
                                            rounded="lg"
                                            _focus={{
                                                borderColor: "green.400",
                                                boxShadow: "0 0 0 1px rgba(34, 197, 94, 0.3)",
                                            }}
                                            _placeholder={{ color: "gray.500" }}
                                            placeholder="Task title"
                                            fontWeight="medium"
                                        />
                                        <Input
                                            value={editDescription}
                                            onChange={(e) => setEditDescription(e.target.value)}
                                            size="sm"
                                            bg="gray.700"
                                            color="white"
                                            border="1px solid"
                                            borderColor="green.400/50"
                                            rounded="lg"
                                            _focus={{
                                                borderColor: "green.400",
                                                boxShadow: "0 0 0 1px rgba(34, 197, 94, 0.3)",
                                            }}
                                            _placeholder={{ color: "gray.500" }}
                                            placeholder="Task description"
                                        />
                                    </VStack>
                                </MotionBox>
                            ) : (
                                <MotionBox
                                    key="display"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <HStack gap={2.5} align="center" mb={1}>
                                        <Box
                                            w="8px"
                                            h="8px"
                                            rounded="full"
                                            bg={`${statusColor}.400`}
                                            boxShadow={`0 0 8px ${statusColor === "green" ? "rgba(34, 197, 94, 0.5)" : statusColor === "yellow" ? "rgba(234, 179, 8, 0.5)" : "rgba(156, 163, 175, 0.5)"}`}
                                            flexShrink={0}
                                        />
                                        <Text
                                            fontWeight="semibold"
                                            color={isDone ? "gray.400" : "white"}
                                            textDecoration={isDone ? "line-through" : "none"}
                                            lineClamp={1}
                                        >
                                            {task.title}
                                        </Text>
                                        <Badge
                                            colorScheme={statusColor}
                                            variant="subtle"
                                            px={2.5}
                                            py={0.5}
                                            rounded="full"
                                            fontSize="xs"
                                            fontWeight="medium"
                                            textTransform="capitalize"
                                        >
                                            {statusLabel.toLowerCase()}
                                        </Badge>
                                    </HStack>

                                    <Text
                                        fontSize="sm"
                                        color={isDone ? "gray.500" : "gray.300"}
                                        mt={1.5}
                                        lineClamp={2}
                                        lineHeight="1.5"
                                    >
                                        {task.description}
                                    </Text>
                                </MotionBox>
                            )}
                        </AnimatePresence>
                    </Box>

                    {/* Action buttons */}
                    <HStack gap={1} flexShrink={0}>
                        {isEditing ? (
                            <>
                                <IconButton
                                    aria-label="save"
                                    size="sm"
                                    variant="ghost"
                                    color="green.400"
                                    _hover={{ color: "green.300", bg: "green.400/10" }}
                                    onClick={handleSave}
                                    rounded="lg"
                                >
                                    <Check size={16} />
                                </IconButton>
                                <IconButton
                                    aria-label="cancel"
                                    size="sm"
                                    variant="ghost"
                                    color="gray.400"
                                    _hover={{ color: "gray.300", bg: "gray.600" }}
                                    onClick={handleCancel}
                                    rounded="lg"
                                >
                                    <X size={16} />
                                </IconButton>
                            </>
                        ) : (
                            <>
                                {!isDone && (
                                    <IconButton
                                        aria-label="mark done"
                                        size="sm"
                                        variant="ghost"
                                        color="green.400"
                                        _hover={{ color: "green.300", bg: "green.400/10" }}
                                        onClick={() => onComplete(task)}
                                        rounded="lg"
                                    >
                                        <CheckCircle size={16} />
                                    </IconButton>
                                )}
                                <IconButton
                                    aria-label="edit"
                                    size="sm"
                                    variant="ghost"
                                    color="gray.400"
                                    _hover={{ color: "white", bg: "gray.600" }}
                                    onClick={handleStartEdit}
                                    rounded="lg"
                                >
                                    <Pencil size={16} />
                                </IconButton>
                                <IconButton
                                    aria-label="delete"
                                    size="sm"
                                    variant="ghost"
                                    color="gray.400"
                                    _hover={{ color: "red.400", bg: "red.400/10" }}
                                    onClick={() => onDelete(task)}
                                    rounded="lg"
                                >
                                    <Trash2 size={16} />
                                </IconButton>
                            </>
                        )}
                    </HStack>
                </HStack>
            </Box>
        </MotionBox>
    );
};

export default TaskCard;
