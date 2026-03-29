import {TasksList} from "../../../widgets/task-list";
import {AddTaskPanel} from "../../../widgets/add-task-panel";
import {Box, Grid} from "@chakra-ui/react";
import {TaskHeader} from "../../../widgets/task-header";
import type {Task} from "../../../entities/task";
// import {useGetTasks} from "../../../features/tasks/api/useGetTasks.ts";
// import {Loader} from "lucide-react";

export const Tasks = () => {
    // const { tasks, loading } = useGetTasks();
    //
    // if (loading) return <Loader/>;\
    const tasks : Task[] = []
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
                minH="0"
            >
                <TasksList tasks={tasks}/>
                <AddTaskPanel />
            </Grid>
        </Box>
    );
};
