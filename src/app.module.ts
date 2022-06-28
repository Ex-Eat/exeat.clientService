import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {config} from "./config";
import { ClientModule } from './client/client.module';

@Module({
    imports: [
        MongooseModule.forRoot(`mongodb://${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`),
        ClientModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
