import { IsString, IsNotEmpty, MaxLength, IsNumber, IsInt, Min } from 'class-validator'

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    name: string

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    price: number

    @Min(1)
    @IsInt()
    @IsNotEmpty()
    categoryId: number
}
