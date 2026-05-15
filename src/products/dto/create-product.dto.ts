import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MinLength(2)
  description: string;

  @IsNumber({
    maxDecimalPlaces: 4,
    allowNaN: false,
    allowInfinity: false,
  })
  @Min(0)
  @IsPositive()
  @Type(() => Number)
  price: number;

  constructor(name: string, description: string, price: number) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
