import {IsString, IsNumber} from 'class-validator';

export class AddIngredientDto {
  @IsString() name;
  @IsNumber() amount;
}