import { useEffect, useState } from "react";
import type { Task } from "../../../entities/task";
import { taskApi } from "../../../entities/task/api/taskApi";
import { normalizeApiError } from "../../../shared/lib/errors/normalizeApiError";

export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isCompleting, setIsCompleting] = useState(false);

    useEffect(() => {
        setError(null);
        taskApi.getAll()
            .then(res => setTasks(res.data))
            .catch((err) => {
                const normalized = normalizeApiError(err);
                setError(normalized.message);
            })
            .finally(() => setLoading(false));
    }, []);

    const addTask = async (task: { title: string; description: string }) => {
        setIsAdding(true);
        setError(null);
        const fullTask: Task = {
            id: null,
            title: task.title,
            description: task.description,
            status: null,
            createdAt: null,
            updatedAt: null,
            completedAt: null,
        };
        try {
            const res = await taskApi.create(fullTask);
            const created = res.data as Task;
            setTasks(prev => [created, ...prev]);
            return created;
        } catch (err) {
            const normalized = normalizeApiError(err);
            setError(normalized.message);
            throw err;
        } finally {
            setIsAdding(false);
        }
    };

    const updateTask = async (task: Task) => {
        if (!task.id) {
            throw new Error("Task id is required to update.");
        }
        setIsUpdating(true);
        setError(null);
        try {
            const res = await taskApi.update(task.id, task);
            const updated = res.data as Task;
            setTasks(prev =>
                prev.map(item => (item.id === updated.id ? updated : item))
            );
            return updated;
        } catch (err) {
            const normalized = normalizeApiError(err);
            setError(normalized.message);
            throw err;
        } finally {
            setIsUpdating(false);
        }
    };

    const deleteTask = async (taskId: string) => {
        setIsDeleting(true);
        setError(null);
        try {
            await taskApi.delete(taskId);
            setTasks(prev => prev.filter(item => item.id !== taskId));
        } catch (err) {
            const normalized = normalizeApiError(err);
            setError(normalized.message);
            throw err;
        } finally {
            setIsDeleting(false);
        }
    };

    const completeTask = async (taskId: string) => {
        setIsCompleting(true);
        setError(null);
        try {
            const res = await taskApi.done(taskId);
            const updated = res.data as Task;
            setTasks(prev =>
                prev.map(item => (item.id === updated.id ? updated : item))
            );
            return updated;
        } catch (err) {
            const normalized = normalizeApiError(err);
            setError(normalized.message);
            throw err;
        } finally {
            setIsCompleting(false);
        }
    };

    return {
        tasks,
        loading,
        error,
        addTask,
        updateTask,
        deleteTask,
        completeTask,
        isAdding,
        isUpdating,
        isDeleting,
        isCompleting,
    };
};
