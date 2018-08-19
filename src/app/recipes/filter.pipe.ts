import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from './recipe.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Recipe[], filterString: string, property: string): any {
    if (!value.length || !filterString) {
      return value;
    }
    const filteredArray = [];
    for (const recipe of value) {
      if (recipe[property].indexOf(filterString) !== -1) {
        filteredArray.push(recipe);
      }
    }
    return filteredArray;
  }

}
