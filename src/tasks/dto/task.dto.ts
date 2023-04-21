import { TaskStatus } from "../task.entity"
import { IsNotEmpty, IsString, MaxLength, IsOptional, IsIn } from "class-validator"

export class CreateTaskDTo {
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    title: string

    description: string
}

export class UpdateTaskDto{
    @IsString()
    @MaxLength(12)
    @IsOptional()
     title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.IN_PROGRESS, TaskStatus.DONE, TaskStatus.PENDING])
    status?: TaskStatus
}