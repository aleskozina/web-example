import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './project/projects.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ProjectsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
