import {
    Box,
    Heading,
    Input,
    Textarea,
    Button,
    VStack,
    Spinner,
    Text,
    HStack,
    Progress,
} from "@chakra-ui/react";
import { type FC, useState } from "react";
import { Plus, Type, FileText } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface Props {
    onAdd: (task: { title: string; description: string }) => Promise<void>;
    isAdding?: boolean;
}

export const AddTaskPanel: FC<Props> = ({ onAdd, isAdding = false }) => {
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [isFocused, setIsFocused] = useState<"title" | "detail" | null>(null);
    const maxTitleLength = 100;
    const maxDetailLength = 500;

    const trimmedTitle = title.trim();
    const trimmedDetail = detail.trim();
    const titleEmpty = trimmedTitle.length === 0;
    const titleTooLong = trimmedTitle.length > maxTitleLength;
    const detailTooLong = trimmedDetail.length > maxDetailLength;
    const hasErrors = titleEmpty || titleTooLong || detailTooLong;

    const titleProgress = (title.length / maxTitleLength) * 100;
    const detailProgress = (detail.length / maxDetailLength) * 100;

    const handleAdd = async () => {
        if (hasErrors) {
            return;
        }
        try {
            await onAdd({ title: trimmedTitle, description: trimmedDetail });
            setTitle("");
            setDetail("");
        } catch (err) {
            console.error(err);
        }
    };

    const getProgressColor = (progress: number) => {
        if (progress > 100) return "red";
        if (progress > 80) return "yellow";
        return "green";
    };

    return (
        <Box
            p={{ base: 6, md: 8 }}
            bg="gray.800"
            minH="100%"
            position="relative"
            overflow="hidden"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "100%",
                background:
                    "linear-gradient(180deg, rgba(34, 197, 94, 0.03) 0%, transparent 50%)",
                pointerEvents: "none",
            }}
        >
            <VStack align="stretch" gap={6} position="relative" zIndex={1}>
                {/* Header */}
                <HStack gap={3} align="center">
                    <Box
                        p={2.5}
                        bg="green.400/10"
                        rounded="xl"
                        border="1px solid"
                        borderColor="green.400/20"
                    >
                        <Plus size={20} color="#4ADE80" />
                    </Box>
                    <Box>
                        <Heading size="md" color="white" fontWeight="bold">
                            Add New Task
                        </Heading>
                        <Text fontSize="sm" color="gray.400" mt={0.5}>
                            Create a task to stay organized
                        </Text>
                    </Box>
                </HStack>

                {/* Form */}
                <VStack gap={5} align="stretch" mt={2}>
                    {/* Title Input */}
                    <Box>
                        <HStack justify="space-between" mb={2}>
                            <HStack gap={2}>
                                <Type size={14} color="#9CA3AF" />
                                <Text fontSize="xs" color="gray.400" fontWeight="medium">
                                    Title
                                </Text>
                            </HStack>
                            <Text
                                fontSize="xs"
                                color={titleTooLong ? "red.400" : "gray.500"}
                                fontWeight="medium"
                            >
                                {title.length}/{maxTitleLength}
                            </Text>
                        </HStack>
                        <Input
                            placeholder="What needs to be done?"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            onFocus={() => setIsFocused("title")}
                            onBlur={() => setIsFocused(null)}
                            bg="gray.700/50"
                            border="1px solid"
                            borderColor={
                                isFocused === "title"
                                    ? "green.400"
                                    : titleTooLong
                                      ? "red.400"
                                      : "whiteAlpha.100"
                            }
                            _hover={{ borderColor: "whiteAlpha.300" }}
                            _focus={{
                                borderColor: "green.400",
                                boxShadow: "0 0 0 1px rgba(34, 197, 94, 0.3)",
                                bg: "gray.700",
                            }}
                            _placeholder={{ color: "gray.500" }}
                            rounded="xl"
                            h="48px"
                            fontSize="sm"
                            transition="all 0.2s"
                        />
                        <Progress.Root
                            value={Math.min(titleProgress, 100)}
                            size="xs"
                            mt={2}
                            rounded="full"
                            colorPalette={getProgressColor(titleProgress)}
                        >
                            <Progress.Track bg="gray.700">
                                <Progress.Range />
                            </Progress.Track>
                        </Progress.Root>
                        {titleTooLong && (
                            <Text color="red.400" fontSize="xs" mt={1}>
                                Title is too long
                            </Text>
                        )}
                    </Box>

                    {/* Description Input */}
                    <Box>
                        <HStack justify="space-between" mb={2}>
                            <HStack gap={2}>
                                <FileText size={14} color="#9CA3AF" />
                                <Text fontSize="xs" color="gray.400" fontWeight="medium">
                                    Description
                                </Text>
                            </HStack>
                            <Text
                                fontSize="xs"
                                color={detailTooLong ? "red.400" : "gray.500"}
                                fontWeight="medium"
                            >
                                {detail.length}/{maxDetailLength}
                            </Text>
                        </HStack>
                        <Textarea
                            placeholder="Add more details about this task..."
                            value={detail}
                            onChange={(e) => setDetail(e.target.value)}
                            onFocus={() => setIsFocused("detail")}
                            onBlur={() => setIsFocused(null)}
                            bg="gray.700/50"
                            border="1px solid"
                            borderColor={
                                isFocused === "detail"
                                    ? "green.400"
                                    : detailTooLong
                                      ? "red.400"
                                      : "whiteAlpha.100"
                            }
                            _hover={{ borderColor: "whiteAlpha.300" }}
                            _focus={{
                                borderColor: "green.400",
                                boxShadow: "0 0 0 1px rgba(34, 197, 94, 0.3)",
                                bg: "gray.700",
                            }}
                            _placeholder={{ color: "gray.500" }}
                            rounded="xl"
                            minH="120px"
                            fontSize="sm"
                            resize="none"
                            transition="all 0.2s"
                        />
                        <Progress.Root
                            value={Math.min(detailProgress, 100)}
                            size="xs"
                            mt={2}
                            rounded="full"
                            colorPalette={getProgressColor(detailProgress)}
                        >
                            <Progress.Track bg="gray.700">
                                <Progress.Range />
                            </Progress.Track>
                        </Progress.Root>
                        {detailTooLong && (
                            <Text color="red.400" fontSize="xs" mt={1}>
                                Description is too long
                            </Text>
                        )}
                    </Box>

                    {/* Submit Button */}
                    <MotionBox
                        whileHover={{ scale: hasErrors || isAdding ? 1 : 1.02 }}
                        whileTap={{ scale: hasErrors || isAdding ? 1 : 0.98 }}
                    >
                        <Button
                            size="lg"
                            w="full"
                            mt={2}
                            onClick={handleAdd}
                            disabled={isAdding || hasErrors}
                            bg={
                                hasErrors
                                    ? "gray.600"
                                    : "linear-gradient(135deg, #4ADE80, #22C55E)"
                            }
                            color={hasErrors ? "gray.400" : "gray.900"}
                            _hover={
                                hasErrors
                                    ? {}
                                    : {
                                          bg: "linear-gradient(135deg, #6EE7A8, #16A34A)",
                                          boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
                                      }
                            }
                            _active={{ transform: "scale(0.98)" }}
                            rounded="xl"
                            fontWeight="semibold"
                            transition="all 0.2s"
                        >
                            {isAdding ? (
                                <HStack gap={2}>
                                    <Spinner size="sm" />
                                    <Text>Adding...</Text>
                                </HStack>
                            ) : (
                                <HStack gap={2}>
                                    <Plus size={18} />
                                    <Text>Add Task</Text>
                                </HStack>
                            )}
                        </Button>
                    </MotionBox>

                    {/* Helper text */}
                    {titleEmpty && title.length === 0 && (
                        <Text fontSize="xs" color="gray.500" textAlign="center">
                            Enter a title to create your task
                        </Text>
                    )}
                </VStack>
            </VStack>
        </Box>
    );
};
