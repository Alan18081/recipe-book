import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from './recipes/recipe.model';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/operators';

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {}
}
