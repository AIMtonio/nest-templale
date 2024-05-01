import { Body, Controller, Delete, Get, Param, Post, Put, Patch } from '@nestjs/common';
import { TaskService } from './taks.service';
import { UpdateTaskDto } from './dto/task.dto';

@Controller('task')
export class TaksController {

    constructor(private taksService: TaskService) {}

@Get()
getAllTaks() {
    return this.taksService.getAllTasks();
}

@Get(':id')
getTaskById(@Param('id') id: string) {
    return this.taksService.getTaskById(id);
}

@Post()
createTaks(@Body() newTaks: any) {
    return this.taksService.createTask(newTaks.title, newTaks.description);
}

@Patch()
updateTaks(@Body() newTaks: any, @Body() updateFields: UpdateTaskDto) {
    return this.taksService.updateTask(newTaks.id, updateFields);
}

@Delete(':id')
deleteTaks(@Param('id') id: string){
    return this.taksService.deleteTask(id);
}

}
