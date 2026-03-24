import {TasksList} from "../../../widgets/task-list";
import {AddTaskPanel} from "../../../widgets/add-task-panel";
import {Box, Grid} from "@chakra-ui/react";
import {TaskHeader} from "../../../widgets/task-header";
import {type Task, TaskStatus} from "../../../entities/task";

export const Tasks = () => {
    const tasks: Task[] = [
        {
            id: "1",
            title: "Finish React project",
            description: "Complete task dashboard UI and fix bugs",
            status: TaskStatus.Pending,
            createdAt: null,
            updatedAt: null,
            completedAt: null
        }
    ];
    return (
        <Box
            bg="gray.900"
            minH="100vh" // ✅
            display="flex"
            flexDirection="column"
        >
            <TaskHeader />

            <Grid
                templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
                flex="1"
                minH="0" // 🔥 ВАЖНО для скролла
            >
                <TasksList tasks={tasks}/>
                <AddTaskPanel />
            </Grid>
        </Box>
    );
};
