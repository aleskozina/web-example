import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "./project.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProjectsService {

    constructor() {

    }

}