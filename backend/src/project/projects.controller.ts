import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { RestController } from 'shared/rest-controller.class';

@Controller('projects')
export class ProjectsController extends RestController {

  constructor(@InjectRepository(Project) repository: Repository<Project>) {
    super(repository);
  }

}