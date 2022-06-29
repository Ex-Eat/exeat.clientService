import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateClientDto {
    @IsString()
    @IsNotEmpty()
    _id: number;

    @IsNumber()
    @IsNotEmpty()
    globalUserId: number;
    
    @IsString()
    @IsOptional()
    firstName?: string;
    
    @IsString()
    @IsOptional()
    lastName?: string;
    
    @IsString()
    @IsOptional()
    phoneNumber?: string;

    @IsOptional()
    locations?: [{lat: number, lng: number, address: string, name: string}];
    
    @IsBoolean()
    @IsOptional()
    notification?: boolean;
}