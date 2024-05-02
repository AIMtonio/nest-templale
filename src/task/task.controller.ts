import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService) {}

    @Post()
    createUser(@Body() newTask: CreateTaskDto){
        return this.taskService.createTask(newTask);
    }

    @Get()
    getTasks(){
        return this.taskService.getTasks();
    }

    @Get(':id')
    getTaskById(@Param('id', ParseIntPipe) id: number ){
        return this.taskService.getTaskById(id);
    }

    @Patch(':id')
    updateTask(@Param('id', ParseIntPipe) id: number, @Body() task: UpdateTaskDto){
        return this.taskService.updateTask(id, task);
    }

    @Delete(':id')
    deleteTask(@Param('id', ParseIntPipe) id: number){
        return this.taskService.deleteTask(id);
    }


}
