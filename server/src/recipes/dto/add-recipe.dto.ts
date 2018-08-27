import {IsString, IsArray, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {AddIngredientDto} from '../../ingredients/dto/add-ingredient.dto';

export class AddRecipeDto {
  @IsString() name;

  @IsString() description;

  @IsString() imageUrl;

  @ValidateNested()
  @Type(() => AddIngredientDto)
  ingredients: AddIngredientDto[];
}