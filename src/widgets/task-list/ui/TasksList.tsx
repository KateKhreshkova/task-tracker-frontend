import { VStack, Box, Input, Button, HStack, Center, Text } from "@chakra-ui/react";
import TaskCard from "./TaskCard";
import type { FC } from "react";
import type { Task } from "../../../entities/task";
import { ClipboardList } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

/*
 * Props interface describing the properties
 * that the TasksList component can receive.
 */
interface Props {
    // Array of tasks to display (optional)
    tasks?: Task[];
    onUpdate: (task: Task) => void;
    onDelete: (task: Task) => void;
    onComplete: (task: Task) => void;
}

const PAGE_SIZE = 6;
const STATUS_FILTERS = ["ALL", "PENDING", "DONE"] as const;
type StatusFilter = (typeof STATUS_FILTERS)[number];

/*
 * Functional React component that displays a list of tasks.
 * If there are no tasks, it shows an empty-state message.
 */
export const TasksList: FC<Props> = ({ tasks = [], onUpdate, onDelete, onComplete }) => {
    const [query, setQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");
    const [page, setPage] = useState(1);
    const trimmedQuery = query.trim();
    const hasQuery = trimmedQuery.length > 0;

    const statusFilteredTasks = useMemo(() => {
        if (statusFilter === "ALL") {
            return tasks;
        }
        return tasks.filter(task => task.status === statusFilter);
    }, [statusFilter, tasks]);

    const filteredTasks = useMemo(() => {
        if (!hasQuery) {
            return statusFilteredTasks;
        }
        const lowered = trimmedQuery.toLowerCase();
        return statusFilteredTasks.filter(task =>
            task.title.toLowerCase().includes(lowered) ||
            task.description.toLowerCase().includes(lowered)
        );
    }, [hasQuery, statusFilteredTasks, trimmedQuery]);

    const totalPages = Math.max(1, Math.ceil(filteredTasks.length / PAGE_SIZE));
    const clampedPage = Math.min(page, totalPages);

    const pagedTasks = useMemo(() => {
        const start = (clampedPage - 1) * PAGE_SIZE;
        return filteredTasks.slice(start, start + PAGE_SIZE);
    }, [clampedPage, filteredTasks]);

    useEffect(() => {
        setPage(1);
    }, [trimmedQuery, tasks.length, statusFilter]);

    const handleCancel = () => {
        setQuery("");
        setPage(1);
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
            p={8} // padding
            borderRight="1px solid" // right border
            borderColor="whiteAlpha.200"
            minW="0"
            h="100%" // full height
            overflow="auto" // allow scrolling if tasks overflow
            display="flex"
            flexDirection="column"
        >

            {/* Search input and search button */}
            <HStack mb={4}>
                <Input
                    flex="1"
                    placeholder="Search your tasks..."
                    bg="gray.800"
                    border="none"
                    _focus={{ bg: "gray.700" }}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />

                <Button colorScheme="green" disabled={!hasQuery}>
                    SEARCH TASKS
                </Button>

                {hasQuery && (
                    <Button
                        variant="ghost"
                        color="gray.300"
                        _hover={{ color: "white", bg: "gray.700" }}
                        onClick={handleCancel}
                    >
                        CANCEL
                    </Button>
                )}
            </HStack>

            <HStack mb={6} gap={2} flexWrap="wrap">
                {STATUS_FILTERS.map((filter) => {
                    const isActive = statusFilter === filter;
                    return (
                        <Button
                            key={filter}
                            size="sm"
                            variant={isActive ? "solid" : "ghost"}
                            colorScheme={isActive ? "green" : undefined}
                            color={isActive ? "white" : "gray.300"}
                            _hover={{ color: "white", bg: "gray.700" }}
                            onClick={() => setStatusFilter(filter)}
                        >
                            {filter}
                        </Button>
                    );
                })}
            </HStack>

            {/* Conditional rendering depending on whether tasks exist */}
            {filteredTasks.length === 0 ? (

                /* Empty state when there are no tasks */
                <Center flex="1" flexDirection="column" color="gray.400">
                    <ClipboardList size={48} />

                    <Text mt={4} fontSize="lg" textAlign="center">
                        {emptyTitle}
                    </Text>

                    <Text fontSize="sm" textAlign="center">
                        {emptySubtitle}
                    </Text>
                </Center>

            ) : (

                /* Display list of tasks if they exist */
                <VStack gap={4} align="stretch">
                    {pagedTasks.map((task) => (

                        /* Each task is rendered using the TaskCard component */
                        <TaskCard
                            key={task.id}
                            task={task}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                            onComplete={onComplete}
                        />

                    ))}
                </VStack>

            )}

            {filteredTasks.length > 0 && totalPages > 1 && (
                <HStack mt={8} justify="center">
                    <Button
                        variant="ghost"
                        color="gray.300"
                        _hover={{ color: "white", bg: "gray.700" }}
                        disabled={clampedPage === 1}
                        onClick={() => setPage(prev => Math.max(1, prev - 1))}
                    >
                        PREV
                    </Button>

                    {Array.from({ length: totalPages }, (_, index) => {
                        const pageNumber = index + 1;
                        const isActive = pageNumber === clampedPage;
                        return (
                            <Button
                                key={pageNumber}
                                size="sm"
                                variant={isActive ? "solid" : "ghost"}
                                colorScheme={isActive ? "green" : undefined}
                                color={isActive ? "white" : "gray.300"}
                                _hover={{ color: "white", bg: "gray.700" }}
                                onClick={() => setPage(pageNumber)}
                            >
                                {pageNumber}
                            </Button>
                        );
                    })}

                    <Button
                        variant="ghost"
                        color="gray.300"
                        _hover={{ color: "white", bg: "gray.700" }}
                        disabled={clampedPage === totalPages}
                        onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
                    >
                        NEXT
                    </Button>
                </HStack>
            )}
        </Box>
    );
};
