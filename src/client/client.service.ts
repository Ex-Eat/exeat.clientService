import {Connection, Model} from 'mongoose';
import { Injectable } from '@nestjs/common';
import {InjectConnection, InjectModel} from '@nestjs/mongoose';
import { Client, ClientDocument } from '../schemas/client.schema';
import { CreateClientDto } from '../dto/create-client.dto';
import {UpdateClientDto} from "../dto/update-client.dto";

@Injectable()
export class ClientService {
    constructor(
        @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
        @InjectConnection() private connection: Connection
    ) {}

    async getAll(): Promise<ClientDocument[]> {
        return this.clientModel.find().exec();
    }

    async getOne(id: string): Promise<ClientDocument> {
        return await this.clientModel.findById(id).exec();
    }

    async create(createClientDto: CreateClientDto): Promise<ClientDocument> {
        const createdClient = new this.clientModel(createClientDto);
        return await createdClient.save();
    }

    async update(id: string, client: Client): Promise<ClientDocument> {
        return await this.clientModel.findByIdAndUpdate(id, client, {
          new: true,
        });
    }

    async delete(id: string): Promise<ClientDocument> {
        return await this.clientModel.findByIdAndRemove(id);
    }
}
