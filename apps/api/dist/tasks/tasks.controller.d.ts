import { TasksService } from "./tasks.service";
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): {
        id: number;
        title: string;
        description: string;
    }[];
}
