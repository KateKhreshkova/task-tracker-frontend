import {
    VStack,
    Box,
    Input,
    Button,
    HStack,
    Center,
    Text,
    InputGroup,
    Badge,
} from "@chakra-ui/react";
import TaskCard from "./TaskCard";
import type { FC } from "react";
import type { Task } from "../../../entities/task";
import {
    ClipboardList,
    Search,
    X,
    CheckCircle2,
    Clock,
    LayoutList,
} from "lucide-react";
import { useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

interface Props {
    tasks?: Task[];
    onUpdate: (task: Task) => void;
    onDelete: (task: Task) => void;
    onComplete: (task: Task) => void;
}

const PAGE_SIZE = 6;
const STATUS_FILTERS = ["ALL", "PENDING", "DONE"] as const;
type StatusFilter = (typeof STATUS_FILTERS)[number];

const filterIcons = {
    ALL: LayoutList,
    PENDING: Clock,
    DONE: CheckCircle2,
};

const filterLabels = {
    ALL: "All Tasks",
    PENDING: "Pending",
    DONE: "Completed",
};

export const TasksList: FC<Props> = ({
    tasks = [],
    onUpdate,
    onDelete,
    onComplete,
}) => {
    const [query, setQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");
    const [page, setPage] = useState(1);
    const trimmedQuery = query.trim();
    const hasQuery = trimmedQuery.length > 0;

    const statusFilteredTasks = useMemo(() => {
        if (statusFilter === "ALL") {
            return tasks;
        }
        return tasks.filter((task) => task.status === statusFilter);
    }, [statusFilter, tasks]);

    const filteredTasks = useMemo(() => {
        if (!hasQuery) {
            return statusFilteredTasks;
        }
        const lowered = trimmedQuery.toLowerCase();
        return statusFilteredTasks.filter(
            (task) =>
                task.title.toLowerCase().includes(lowered) ||
                task.description.toLowerCase().includes(lowered)
        );
    }, [hasQuery, statusFilteredTasks, trimmedQuery]);

    const totalPages = Math.max(1, Math.ceil(filteredTasks.length / PAGE_SIZE));
    const clampedPage = Math.min(page, totalPages);

    // Track previous values to reset page when filters change
    const prevQueryRef = useRef(trimmedQuery);
    const prevTasksLengthRef = useRef(tasks.length);
    const prevStatusFilterRef = useRef(statusFilter);

    // Reset page when filters change (computed during render, not in effect)
    if (
        prevQueryRef.current !== trimmedQuery ||
        prevTasksLengthRef.current !== tasks.length ||
        prevStatusFilterRef.current !== statusFilter
    ) {
        prevQueryRef.current = trimmedQuery;
        prevTasksLengthRef.current = tasks.length;
        prevStatusFilterRef.current = statusFilter;
        if (page !== 1) {
            setPage(1);
        }
    }

    const pagedTasks = useMemo(() => {
        const start = (clampedPage - 1) * PAGE_SIZE;
        return filteredTasks.slice(start, start + PAGE_SIZE);
    }, [clampedPage, filteredTasks]);

    const handleCancel = () => {
        setQuery("");
        setPage(1);
    };

    // Task counts
    const pendingCount = tasks.filter((t) => t.status === "PENDING").length;
    const doneCount = tasks.filter((t) => t.status === "DONE").length;

    const getFilterCount = (filter: StatusFilter) => {
        if (filter === "ALL") return tasks.length;
        if (filter === "PENDING") return pendingCount;
        return doneCount;
    };

    const emptyTitle = hasQuery
        ? "No matching tasks"
        : statusFilter === "PENDING"
          ? "No pending tasks"
          : statusFilter === "DONE"
            ? "No completed tasks"
            : "No tasks yet";

    const emptySubtitle = hasQuery
        ? "Try a different search term"
        : statusFilter === "ALL"
          ? "Add a task to get started"
          : "Try switching to All tasks";

    return (
        <Box
            p={{ base: 4, md: 8 }}
            borderRight="1px solid"
            borderColor="whiteAlpha.100"
            minW="0"
            h="100%"
            overflow="auto"
            display="flex"
            flexDirection="column"
            bg="gray.900"
        >
            {/* Search Section */}
            <Box mb={5}>
                <InputGroup
                    startElement={
                        <Search
                            size={18}
                            color="#9CA3AF"
                            style={{ marginLeft: 8 }}
                        />
                    }
                    endElement={
                        hasQuery ? (
                            <Box
                                as="button"
                                onClick={handleCancel}
                                p={1}
                                mr={2}
                                rounded="md"
                                _hover={{ bg: "whiteAlpha.200" }}
                                transition="all 0.2s"
                            >
                                <X size={16} color="#9CA3AF" />
                            </Box>
                        ) : null
                    }
                >
                    <Input
                        placeholder="Search tasks..."
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        bg="gray.800"
                        border="1px solid"
                        borderColor="whiteAlpha.100"
                        _hover={{ borderColor: "whiteAlpha.300" }}
                        _focus={{
                            borderColor: "green.400",
                            boxShadow: "0 0 0 1px rgba(34, 197, 94, 0.3)",
                            bg: "gray.800",
                        }}
                        _placeholder={{ color: "gray.500" }}
                        rounded="xl"
                        h="48px"
                        pl="44px"
                        pr={hasQuery ? "40px" : "16px"}
                        fontSize="sm"
                    />
                </InputGroup>
            </Box>

            {/* Filter Tabs */}
            <HStack mb={6} gap={2} flexWrap="wrap">
                {STATUS_FILTERS.map((filter) => {
                    const isActive = statusFilter === filter;
                    const Icon = filterIcons[filter];
                    const count = getFilterCount(filter);

                    return (
                        <Button
                            key={filter}
                            size="sm"
                            variant="ghost"
                            bg={isActive ? "green.400/15" : "transparent"}
                            color={isActive ? "green.400" : "gray.400"}
                            border="1px solid"
                            borderColor={isActive ? "green.400/30" : "transparent"}
                            _hover={{
                                bg: isActive ? "green.400/20" : "whiteAlpha.100",
                                color: isActive ? "green.300" : "white",
                            }}
                            onClick={() => setStatusFilter(filter)}
                            rounded="lg"
                            px={4}
                            h="36px"
                            transition="all 0.2s"
                        >
                            <HStack gap={2}>
                                <Icon size={14} />
                                <Text fontSize="sm" fontWeight="medium">
                                    {filterLabels[filter]}
                                </Text>
                                <Badge
                                    bg={isActive ? "green.400/20" : "whiteAlpha.100"}
                                    color={isActive ? "green.300" : "gray.400"}
                                    rounded="full"
                                    px={2}
                                    py={0.5}
                                    fontSize="xs"
                                    fontWeight="medium"
                                >
                                    {count}
                                </Badge>
                            </HStack>
                        </Button>
                    );
                })}
            </HStack>

            {/* Results info */}
            {hasQuery && filteredTasks.length > 0 && (
                <Text fontSize="sm" color="gray.400" mb={4}>
                    Found {filteredTasks.length} task
                    {filteredTasks.length !== 1 ? "s" : ""} matching "{query}"
                </Text>
            )}

            {/* Task List or Empty State */}
            <AnimatePresence mode="wait">
                {filteredTasks.length === 0 ? (
                    <MotionBox
                        key="empty"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        flex="1"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Center flexDirection="column" color="gray.400" py={12}>
                            <Box
                                p={4}
                                bg="whiteAlpha.50"
                                rounded="2xl"
                                mb={4}
                            >
                                <ClipboardList size={48} strokeWidth={1.5} />
                            </Box>

                            <Text
                                mt={2}
                                fontSize="lg"
                                fontWeight="medium"
                                textAlign="center"
                                color="gray.300"
                            >
                                {emptyTitle}
                            </Text>

                            <Text
                                fontSize="sm"
                                textAlign="center"
                                color="gray.500"
                                mt={1}
                            >
                                {emptySubtitle}
                            </Text>

                            {hasQuery && (
                                <Button
                                    mt={4}
                                    size="sm"
                                    variant="ghost"
                                    color="green.400"
                                    _hover={{ bg: "green.400/10" }}
                                    onClick={handleCancel}
                                >
                                    Clear search
                                </Button>
                            )}
                        </Center>
                    </MotionBox>
                ) : (
                    <MotionBox
                        key="list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <VStack gap={3} align="stretch">
                            {pagedTasks.map((task, index) => (
                                <MotionBox
                                    key={task.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.05,
                                    }}
                                >
                                    <TaskCard
                                        task={task}
                                        onUpdate={onUpdate}
                                        onDelete={onDelete}
                                        onComplete={onComplete}
                                    />
                                </MotionBox>
                            ))}
                        </VStack>
                    </MotionBox>
                )}
            </AnimatePresence>

            {/* Pagination */}
            {filteredTasks.length > 0 && totalPages > 1 && (
                <HStack mt={8} justify="center" gap={1}>
                    <Button
                        variant="ghost"
                        size="sm"
                        color="gray.400"
                        _hover={{ color: "white", bg: "whiteAlpha.100" }}
                        disabled={clampedPage === 1}
                        onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                        rounded="lg"
                    >
                        Previous
                    </Button>

                    <HStack gap={1}>
                        {Array.from({ length: totalPages }, (_, index) => {
                            const pageNumber = index + 1;
                            const isActive = pageNumber === clampedPage;
                            return (
                                <Button
                                    key={pageNumber}
                                    size="sm"
                                    variant="ghost"
                                    bg={isActive ? "green.400/15" : "transparent"}
                                    color={isActive ? "green.400" : "gray.400"}
                                    border="1px solid"
                                    borderColor={
                                        isActive ? "green.400/30" : "transparent"
                                    }
                                    _hover={{
                                        bg: isActive
                                            ? "green.400/20"
                                            : "whiteAlpha.100",
                                        color: isActive ? "green.300" : "white",
                                    }}
                                    onClick={() => setPage(pageNumber)}
                                    rounded="lg"
                                    minW="36px"
                                >
                                    {pageNumber}
                                </Button>
                            );
                        })}
                    </HStack>

                    <Button
                        variant="ghost"
                        size="sm"
                        color="gray.400"
                        _hover={{ color: "white", bg: "whiteAlpha.100" }}
                        disabled={clampedPage === totalPages}
                        onClick={() =>
                            setPage((prev) => Math.min(totalPages, prev + 1))
                        }
                        rounded="lg"
                    >
                        Next
                    </Button>
                </HStack>
            )}
        </Box>
    );
};
