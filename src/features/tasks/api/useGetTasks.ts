import {useEffect, useState} from "react";
import type { Task } from "../../../entities/task";
import {taskApi} from "../../../entities/task/api/taskApi.ts";

export const useGetTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        taskApi.getAll()
            .then(res => setTasks(res.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return { tasks, loading };
};