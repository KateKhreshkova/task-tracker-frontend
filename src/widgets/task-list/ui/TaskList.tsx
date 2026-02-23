import { VStack, Box, Input, Button, HStack } from "@chakra-ui/react";
import { TaskCard } from "./TaskCard";

export const TasksList = () => {
    return (
        <Box p={8} borderRight="1px solid" borderColor="whiteAlpha.200">

            {/* Search + Add button */}
            <HStack mb={6}>
                <Input
                    placeholder="Search your tasks..."
                    bg="gray.800"
                    border="none"
                    _focus={{ bg: "gray.700" }}
                />
                <Button colorScheme="green">
                    ADD TASK
                </Button>
            </HStack>

            {/* Tasks */}
            <VStack gap={4}>
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </VStack>

        </Box>
    );
};