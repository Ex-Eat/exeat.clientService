import { Controller } from '@nestjs/common';
import {ClientService} from "./client.service";
import {Client} from "../schemas/client.schema";
import {CreateClientDto} from "../dto/create-client.dto";
import {MessagePattern} from "@nestjs/microservices";

@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService) {}

    @MessagePattern({cmd: 'getItems'})
    getAll(): Promise<Client[]> {
        return this.clientService.findAll();
    }

    @MessagePattern({cmd: 'postItem'})
    postOne(): Promise<Client> {
        let client:  Client = new CreateClientDto()
        client.name = 'test'
        return this.clientService.create(client)
    }
}
