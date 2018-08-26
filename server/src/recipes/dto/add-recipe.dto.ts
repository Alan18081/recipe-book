import {IsString, IsArray} from 'class-validator';

export class AddRecipeDto {
  @IsString() name;

  @IsString() description;

  @IsString() imageUrl;

  @IsArray() ingredients;
}