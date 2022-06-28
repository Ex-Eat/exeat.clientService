import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';


export class CreateClientDto {
    @IsNumber()
    @IsNotEmpty()
    public userId: number;

    @IsString()
    @IsNotEmpty()
    public name: string;

    @IsString()
    public address: string;
}