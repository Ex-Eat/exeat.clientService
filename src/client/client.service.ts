import {Connection, Model} from 'mongoose';
import { Injectable } from '@nestjs/common';
import {InjectConnection, InjectModel} from '@nestjs/mongoose';
import { Client, ClientDocument } from '../schemas/client.schema';
import { CreateClientDto } from '../dto/create-client.dto';


@Injectable()
export class ClientService {
    constructor(
        @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
        @InjectConnection() private connection: Connection
    ) {}

    async create(CreateClientDto: CreateClientDto): Promise<Client> {
        const createdClient = new this.clientModel(CreateClientDto);
        return createdClient.save();
    }

    async findAll(): Promise<Client[]> {
        return this.clientModel.find().exec();
    }
}
