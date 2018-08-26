import {Ingredient} from '../../shared/ingredient.model';

export interface IRecipeInfo {
  name: string;
  description: string;
  imageUrl: string;
  ingredients: Ingredient[]
}
