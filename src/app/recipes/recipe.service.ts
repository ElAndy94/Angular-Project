import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'http://dl.maxpixel.freegreatpicture.com/?f=food-1459693_1920.jpg&type=View&token=2ff734c148834e4c8882496428574ae2&pid=1459693'),
        new Recipe('Chicken EGG', 'noodle', 'http://dl.maxpixel.freegreatpicture.com/?f=food-1459693_1920.jpg&type=View&token=2ff734c148834e4c8882496428574ae2&pid=1459693')
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}