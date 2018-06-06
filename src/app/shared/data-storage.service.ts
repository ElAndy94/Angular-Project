import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import 'rxjs/Rx';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    // return this.http.put('https://ng-recipe-book-9f435.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: new HttpHeaders().set()
    // });
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-9f435.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {reportProgress: true});
    return this.http.request(req);
  }

  getRecipes() {
    // this.http.get<Recipe[]>('https://ng-recipe-book-9f435.firebaseio.com/recipes.json?auth=' + token)

    this.http.get<Recipe[]>('https://ng-recipe-book-9f435.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipes);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
