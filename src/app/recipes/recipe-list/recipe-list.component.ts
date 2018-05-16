import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
// import { EventEmitter } from 'events';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://dl.maxpixel.freegreatpicture.com/?f=food-1459693_1920.jpg&type=View&token=2ff734c148834e4c8882496428574ae2&pid=1459693'),
    new Recipe('Chicken EGG', 'noodle', 'http://dl.maxpixel.freegreatpicture.com/?f=food-1459693_1920.jpg&type=View&token=2ff734c148834e4c8882496428574ae2&pid=1459693')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
