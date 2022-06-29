import {Connection, Model} from 'mongoose';
import { Injectable } from '@nestjs/common';
import {InjectConnection, InjectModel} from '@nestjs/mongoose';
import { Client, ClientDocument } from '../schemas/client.schema';
import { CreateClientDto, UpdateClientDto } from '../dto/create-client.dto';


@Injectable()
export class ClientService {
    constructor(
        @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
        @InjectConnection() private connection: Connection
    ) {}

    async getAll(): Promise<ClientDocument[]> {
        return this.clientModel.find().exec();
    }

    async getOne(id: number): Promise<ClientDocument> {
        return await this.clientModel.findOne({globalUserId: id}).exec();
    }

    async create(createClientDto: CreateClientDto): Promise<ClientDocument> {
        const createdClient = new this.clientModel(createClientDto);
        return await createdClient.save();
    }

    async update(id: number, client: Client): Promise<ClientDocument> {
        return await this.clientModel.findOneAndUpdate({globalUserId: id}, client, {
          new: true,
        });
    }

    async delete(id: number): Promise<ClientDocument> {
        return await this.clientModel.findOneAndRemove({globalUserId: id});
    }
}
