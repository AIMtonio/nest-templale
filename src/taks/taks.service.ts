import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { get } from 'http';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {

    private task:Task[] = [{
        id: 1,
        title: 'Primera tarea',
        description: 'Esta es la primera tarea'
    }];

    getAllTasks(){  
        return this.task;
    }

    createTask(title: string, description: string){
        const newTask = {
            id: this.task.length + 1,
            title,
            description
        }
        this.task.push(newTask);
        return newTask;
    }

    getTaskById(id: string): Task{
        if(!this.task.find(task => task.id === +id)){
            return null;
        }
        return this.task.find(task => task.id === +id);
    }

    updateTask(id: string, uodatedFiedls: UpdateTaskDto){
        const task = this.getTaskById(id);
        //task.title = uodatedFiedls.title;
        //task.description = uodatedFiedls.description;

        if(!task){
            return 'No se encontro la tarea';
        }

        const newTask = Object.assign(task, uodatedFiedls);
        this.task.map(task => task.id === +id ? newTask : task);
        return newTask;
    }

    deleteTask(id: string){
        this.task = this.task.filter(task => task.id !== +id);
        return 'Tarea: , '+ id + ' eliminada';
    }
}
