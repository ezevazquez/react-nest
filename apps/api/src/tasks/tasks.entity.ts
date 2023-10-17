enum TaskStatus {
    PENDING = 'PENDING',
    OPEN = 'IN_PROGRESS',
    DONE = 'DONE',
}

export class Task {
    id: string
    title: string
    description: string
    status: TaskStatus
}