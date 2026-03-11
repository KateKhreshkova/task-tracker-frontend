import {TasksList} from "../../../widgets/task-list";
import {AddTaskPanel} from "../../../widgets/add-task-panel";
import {Box, Grid} from "@chakra-ui/react";
import {TaskHeader} from "../../../widgets/task-header";

export const Tasks = () => {
    return (
        <Box
            bg="gray.900"
            h="100vh"
            display="flex"
            flexDirection="column"
        >
            <TaskHeader />

            <Grid
                templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
                flex="1"
                overflow="hidden"
            >
                <TasksList />
                <AddTaskPanel />
            </Grid>

        </Box>
    );
};
