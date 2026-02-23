import {TasksList} from "../../../widgets/task-list";
import {AddTaskPanel} from "../../../widgets/add-task-panel";
import {Grid} from "@chakra-ui/react";

export const Tasks = () => {
    return (
        <Grid
            templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
            minH="100vh"
            bg="gray.900"
        >
            <TasksList />
            <AddTaskPanel />
        </Grid>
    );
};
