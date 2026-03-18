import type { Task, TaskStatus } from "../model/types";

/**
 * Search tasks by keyword and group results by status using Map.
 * @param tasks - array of Task objects to search in
 * @param keyword - string to search in task title or description
 * @returns Map<TaskStatus, Task[]> - tasks matching keyword grouped by status
 */
export function searchTasksByKeyword(tasks: Task[], keyword: string): Map<TaskStatus, Task[]> {
    const resultMap: Map<TaskStatus, Task[]> = new Map();

    tasks.forEach(task => {
        // Check if title or description contains the keyword (case-insensitive)
        if (task.title.toLowerCase().includes(keyword.toLowerCase()) ||
            task.description.toLowerCase().includes(keyword.toLowerCase())) {

            // Add task to the array for this status
            if (!resultMap.has(task.status)) {
                resultMap.set(task.status, []);
            }
            resultMap.get(task.status)!.push(task);
        }
    });

    return resultMap;
}