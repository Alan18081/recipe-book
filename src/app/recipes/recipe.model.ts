import {Ingredient} from '../shared/ingredient.model';
import {uniqueId} from 'lodash';

export class Recipe {
  public id: string;
  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    public ingredients: Ingredient[]
  ) {
    this.id = uniqueId();
  }
}
