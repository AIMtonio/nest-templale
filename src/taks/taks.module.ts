import { Module } from '@nestjs/common';
import { TaksController } from './taks.controller';
import { TaskService } from './taks.service';

@Module({
  controllers: [TaksController],
  providers: [TaskService],
})
export class TaksModule {}
