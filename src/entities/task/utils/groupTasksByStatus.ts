import type {Task, TaskStatus} from "../model/types";

/**
 * Groups an array of tasks by their status.
 *
 * @param tasks - An array of Task objects to be grouped
 * @returns A Map where:
 *          - key = TaskStatus (e.g., PENDING, DONE)
 *          - value = array of tasks with that status
 */
export function groupTasksByStatus(tasks: Task[]): Map<TaskStatus, Task[]> {
    // Create a new Map to hold tasks grouped by status
    const tasksByStatus = new Map<TaskStatus, Task[]>();

    // Iterate over each task in the array
    tasks.forEach(task => {
        // If the map does not already have an array for this status, create one
        if (!tasksByStatus.has(task.status)) {
            tasksByStatus.set(task.status, []);
        }

        // Add the current task to the array corresponding to its status
        tasksByStatus.get(task.status)!.push(task);
    });

    // Return the Map of tasks grouped by status
    return tasksByStatus;
}