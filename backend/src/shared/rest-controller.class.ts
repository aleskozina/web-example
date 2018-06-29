import { Get, Post, Param, Put, Delete, Body } from '@nestjs/common';
import { Repository, ObjectLiteral, getManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Project } from 'project/project.entity';

export class RestController {

  constructor(private readonly repository: Repository<ObjectLiteral>) {
    // console.log(getManager().getRepository(Project));
  }

  @Get()
  async index(): Promise<ObjectLiteral[]> {
    return this.repository.find();
  }

  @Get(':id')
  async show(@Param('id') id: number): Promise<ObjectLiteral> {
    return this.repository.findOne(id);
  }

  @Post()
  async store(@Body() body): Promise<ObjectLiteral> {
    return this.repository.create((await this.repository.insert(body)).generatedMaps[0]);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body): Promise<ObjectLiteral> {
    await this.repository.update(id, body);
    return this.show(id);
  }

  @Delete(':id')
  async destroy(@Param('id') id: number): Promise<null> {

    this.repository.remove( (await this.show(id)));

    return null;
  }

}