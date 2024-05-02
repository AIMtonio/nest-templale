import { Injectable, HttpException, HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {

    constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) {}

    async createTask(task: CreateTaskDto): Promise<Task> {
        const taskExist = await this.getTaskByTitle(task.title);

        if(taskExist){
            throw new HttpException('La tarea ya fue registrada', HttpStatus.CONFLICT);
        }

        const newTask = this.taskRepository.create(task);
        return this.taskRepository.save(newTask);
    }

    getTaskByTitle(title: string) {
        return this.taskRepository.findOne({
            where: {
                title
            }
        });
    }

    getTasks(): Promise<Task[]>{
        return this.taskRepository.find();
    }

    async getTaskById(id: number) {
        const taskFound = await this.taskRepository.findOne({
            where: {
                id
            }
        });

        if(!taskFound){
            throw new HttpException('La tarea no existe', HttpStatus.NOT_FOUND);
        }

        return taskFound;
    }

    updateTask(id: number, task: UpdateTaskDto) {
        return this.taskRepository.update(id, task);
    }

    async deleteTask(id: number) {

        const taskFound = await this.getTaskById(id);

        if(!taskFound){
            throw new HttpException('La tarea no existe', HttpStatus.NOT_FOUND);
        }

        return this.taskRepository.delete(id);
    }



}

