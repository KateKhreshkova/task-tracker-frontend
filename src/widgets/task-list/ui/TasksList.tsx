import { VStack, Box, Input, Button, HStack, Center, Text } from "@chakra-ui/react";
import TaskCard from "./TaskCard";
import type { FC } from "react";
import type { Task } from "../../../entities/task";
import { ClipboardList } from "lucide-react";

/*
 * Props interface describing the properties
 * that the TasksList component can receive.
 */
interface Props {
    // Array of tasks to display (optional)
    tasks?: Task[];
}

/*
 * Functional React component that displays a list of tasks.
 * If there are no tasks, it shows an empty-state message.
 */
export const TasksList: FC<Props> = ({ tasks = [] }) => {
    return (
        <Box
            p={8} // padding
            borderRight="1px solid" // right border
            borderColor="whiteAlpha.200"
            h="100%" // full height
            overflow="auto" // allow scrolling if tasks overflow
        >

            {/* Search input and search button */}
            <HStack mb={6}>
                <Input
                    placeholder="Search your tasks..." // search placeholder
                    bg="gray.800"
                    border="none"
                    _focus={{ bg: "gray.700" }} // change background on focus
                />

                <Button colorScheme="green">
                    SEARCH TASKS
                </Button>
            </HStack>

            {/* Conditional rendering depending on whether tasks exist */}
            {tasks.length === 0 ? (

                /* Empty state when there are no tasks */
                <Center h="80%" flexDirection="column" color="gray.400">
                    <ClipboardList size={48} />

                    <Text mt={4} fontSize="lg" textAlign="center">
                        No tasks yet
                    </Text>

                    <Text fontSize="sm" textAlign="center">
                        Add a task to get started
                    </Text>
                </Center>

            ) : (

                /* Display list of tasks if they exist */
                <VStack gap={4}>
                    {tasks.map((task) => (

                        /* Each task is rendered using the TaskCard component */
                        <TaskCard key={task.id} task={task} />

                    ))}
                </VStack>

            )}
        </Box>
    );
};