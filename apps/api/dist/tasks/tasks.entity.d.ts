declare enum TaskStatus {
    PENDING = "PENDING",
    OPEN = "IN_PROGRESS",
    DONE = "DONE"
}
export declare class Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}
export {};
