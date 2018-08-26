import {uniqueId} from 'lodash';

export class Ingredient {
  public id?: string;
  constructor(
    public name: string,
    public amount: number
  ) {
    this.id = uniqueId();
  }
}
