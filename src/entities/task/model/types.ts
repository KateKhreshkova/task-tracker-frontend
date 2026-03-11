export interface Task {
    id: string,
    title: string,
    description: string,
    status: TaskStatus,
    createdAt: Date,
    updatedAt: Date,
    completedAt: Date
}
export const TaskStatus = {
    Done: "DONE",
    Pending: "PENDING",
} as const;
export type TaskStatus =
    (typeof TaskStatus)[keyof typeof TaskStatus];