import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./tasks.entity";
import { v4 } from "uuid";

@Injectable()
export class TasksService {
  
  private tasks: Task[] = [
    {
      id: "1",
      title: "first tasl",
      description: "description for first task",
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push();

    return task;
  }
  updateTask() {}
  deleteTask() {}
}
