import { Task, TaskStatus } from "./tasks.entity";
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    createTask(title: string, description: string): {
        id: string;
        title: string;
        description: string;
        status: TaskStatus;
    };
    updateTask(): void;
    deleteTask(): void;
}
