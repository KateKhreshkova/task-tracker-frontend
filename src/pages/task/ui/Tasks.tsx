import {TasksList} from "../../../widgets/task-list";
import {AddTaskPanel} from "../../../widgets/add-task-panel";
import {
    AlertContent,
    AlertDescription,
    AlertIndicator,
    AlertRoot,
    Box,
    Grid
} from "@chakra-ui/react";
import {TaskHeader} from "../../../widgets/task-header";
import {useTasks} from "../../../features/tasks/model/useTasks.ts";
import {Loader} from "lucide-react";
import type {Task} from "../../../entities/task";

export const Tasks = () => {
    const {
        tasks,
        loading,
        error,
        addTask,
        updateTask,
        deleteTask,
        completeTask,
        isAdding,
    } = useTasks();

    const handleAddTask = async (task: { title: string; description: string }) => {
        try {
            await addTask(task);
        } catch (err) {
            console.error(err);
        }
    };

    const handleUpdateTask = async (task: Task) => {
        try {
            await updateTask(task);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteTask = async (task: Task) => {
        if (!task.id) {
            return;
        }
        try {
            await deleteTask(task.id);
        } catch (err) {
            console.error(err);
        }
    };

    const handleCompleteTask = async (task: Task) => {
        if (!task.id) {
            return;
        }
        try {
            await completeTask(task.id);
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) return <Loader/>;
    return (
        <Box
            bg="gray.900"
            minH="100vh" // ✅
            display="flex"
            flexDirection="column"
        >
            <TaskHeader />
            {error && (
                <Box px={6} pt={4}>
                    <AlertRoot status="error" bg="red.900" color="red.100">
                        <AlertIndicator />
                        <AlertContent>
                            <AlertDescription>{error}</AlertDescription>
                        </AlertContent>
                    </AlertRoot>
                </Box>
            )}

            <Grid
                templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
                flex="1"
                minH="0"
            >
                <TasksList
                    tasks={tasks}
                    onUpdate={handleUpdateTask}
                    onDelete={handleDeleteTask}
                    onComplete={handleCompleteTask}
                />
                <AddTaskPanel onAdd={handleAddTask} isAdding={isAdding} />
            </Grid>
        </Box>
    );
};
