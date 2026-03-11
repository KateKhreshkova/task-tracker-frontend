import {VStack, Box, Input, Button, HStack, Center, Text} from "@chakra-ui/react";
import TaskCard from "./TaskCard";
import type {FC} from "react";
import type { Task } from "../../../entities/task";
import {ClipboardList} from "lucide-react";
interface Props {
    tasks?: Task[];
}
export const TasksList: FC<Props> = ({tasks = []}) => {
    return (
        <Box p={8}
    borderRight="1px solid"
    borderColor="whiteAlpha.200"
    h="100%"
    overflow="auto">

            {/* Search + Add button */}
            <HStack mb={6}>
                <Input
                    placeholder="Search your tasks..."
                    bg="gray.800"
                    border="none"
                    _focus={{ bg: "gray.700" }}
                />
                <Button colorScheme="green">
                    SEARCH TASKS
                </Button>
            </HStack>

            {/* Tasks */}
            {tasks.length === 0 ? (
                <Center h="80%" flexDirection="column" color="gray.400">
                    <ClipboardList size={48} />
                    <Text mt={4} fontSize="lg" textAlign="center">
                        No tasks yet
                    </Text>
                    <Text fontSize="sm" textAlign="center">
                        Add a task to get started
                    </Text>
                </Center>
            )  : (<VStack gap={4}>
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task}/>
                ))}
            </VStack>)}

        </Box>
    );
};