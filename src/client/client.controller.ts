import { Controller } from '@nestjs/common';
import {ClientService} from "./client.service";
import {Client} from "../schemas/client.schema";
import {CreateClientDto} from "../dto/create-client.dto";
import {MessagePattern} from "@nestjs/microservices";

@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService) {}

    @MessagePattern({cmd: 'client/getAll'})
    getAll(): Promise<Client[]> {
        return this.clientService.getAll();
    }

    @MessagePattern({ cmd: 'client/getOne' })
    async getOne(data: { id: number }): Promise<any> {
        return this.clientService.getOne(data.id);
    }

    @MessagePattern({cmd: 'client/create'})
    create(data): Promise<Client> {
        let client:  Client = new CreateClientDto()

        if (data.client.termsOfUse) {
            client.termsOfUse = data.client.termsOfUse;
        } else {
            throw new Error('You need to accept the terms of use.');
        }

        

        client.globalUserId = data.client.globalUserId;
        client.firstName = data.client.firstName;
        client.lastName = data.client.lastName;
        client.phoneNumber = data.client.phoneNumber;
        client.locations = data.client.locations;
        client.patronageCode = data.client.patronageCode;
        client.notification = data.client.notification;

        return this.clientService.create(client)
    }

    @MessagePattern({cmd: 'client/update'})
    update(data: { id: number, client: any }): Promise<any> {
        return this.clientService.update(data.id, data.client);
    }

    @MessagePattern({cmd: 'client/delete'})
    delete(data: { id: number }): Promise<any> {
        return this.clientService.delete(data.id);
    }
}
