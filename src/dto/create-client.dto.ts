import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';


export class CreateClientDto {
    @IsNumber()
    @IsNotEmpty()
    globalUserId: number;
    
    @IsString()
    @IsNotEmpty()
    firstName: string;
    
    @IsString()
    @IsNotEmpty()
    lastName: string;
    
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;
    
    @IsBoolean()
    @IsNotEmpty()
    termsOfUse: boolean;
    
    @IsNotEmpty()
    locations: {lat: number, lng: number, address: string};
    
    @IsString()
    @IsOptional()
    patronageCode: string;
    
    @IsBoolean()
    @IsNotEmpty()
    notification: boolean;
}