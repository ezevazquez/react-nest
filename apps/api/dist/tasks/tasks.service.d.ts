export declare class TasksService {
    getAllTasks(): {
        id: number;
        title: string;
        description: string;
    }[];
    createTask(): void;
    updateTask(): void;
    deleteTask(): void;
}
