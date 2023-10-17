import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {
  getAllTasks() {
    return [
      {
        id: 1,
        title: "first tasl",
        description: "description for first task",
      },
    ];
  }
  createTask() {}
  updateTask() {}
  deleteTask() {}
}
