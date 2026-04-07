export interface Task {
    id: string | null,
    title: string,
    description: string,
    status: TaskStatus | null,
    createdAt: Date | null,
    updatedAt: Date | null,
    completedAt: Date | null,
}
export const TaskStatus = {
    Done: "DONE",
    Pending: "PENDING",
} as const;
export type TaskStatus =
    (typeof TaskStatus)[keyof typeof TaskStatus];