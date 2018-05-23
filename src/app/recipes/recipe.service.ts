import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Super-Tasty Schnitzel', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', [ 
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Chicken & Salad', 'Very Healthy', 'http://dl.maxpixel.freegreatpicture.com/?f=food-1459693_1920.jpg&type=View&token=2ff734c148834e4c8882496428574ae2&pid=1459693', [
            new Ingredient('Chicken', 1),
            new Ingredient('Salad', 1)
        ]),
        new Recipe('Big Burger', 'Biggest Burger', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg', [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1),
            new Ingredient('Bacon', 2)
        ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}