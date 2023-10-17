import { TasksService } from "./tasks.service";
import { CreatTaskDTO } from "./dto/task.dto";
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): import("./tasks.entity").Task[];
    createTask(newTask: CreatTaskDTO): {
        id: string;
        title: string;
        description: string;
        status: import("./tasks.entity").TaskStatus;
    };
}
