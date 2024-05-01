import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;
    description: string;
}

export class UpdateTaskDto {
    title?: string;
    description?: string;
}