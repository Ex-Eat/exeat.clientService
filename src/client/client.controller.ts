import { Controller } from '@nestjs/common';
import {ClientService} from "./client.service";
import {Client} from "../schemas/client.schema";
import {CreateClientDto} from "../dto/create-client.dto";
import {MessagePattern} from "@nestjs/microservices";
import {UpdateClientDto} from "../dto/update-client.dto";

@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService) {}

    @MessagePattern({cmd: 'client/getAll'})
    getAll(): Promise<Client[]> {
        return this.clientService.getAll();
    }

    @MessagePattern({ cmd: 'client/getOne' })
    async getOne(data: { id: string }): Promise<any> {
        return this.clientService.getOne(data.id);
    }

    @MessagePattern({ cmd: 'client/getOneByGlobalId' })
    async getOneByGlobalId(id: number): Promise<any> {
        return this.clientService.getOneGlobalId(id);
    }

    @MessagePattern({cmd: 'client/create'})
    create(data): Promise<Client> {
        let client:  Client = new CreateClientDto()

        if (data.client[0].termsOfUse) {
            client.termsOfUse = data.client[0].termsOfUse;
        } else {
            throw new Error('You need to accept the terms of use.');
        }



        client.globalUserId = data.client[0].globalUserId;
        client.firstName = data.client[0].firstName;
        client.lastName = data.client[0].lastName;
        client.phoneNumber = data.client[0].phoneNumber;
        client.locations = data.client[0].locations;
        client.patronageCode = data.client[0].patronageCode;
        client.notification = data.client[0].notification;

        return this.clientService.create(client)
    }

    @MessagePattern({cmd: 'client/update'})
    update(data: { id: string, client: any }): Promise<any> {
        return this.clientService.update(data.id, data.client);
    }

    @MessagePattern({cmd: 'client/delete'})
    delete(data: { id: string }): Promise<any> {
        return this.clientService.delete(data.id);
    }
}
