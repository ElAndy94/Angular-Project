import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://dl.maxpixel.freegreatpicture.com/?f=food-1459693_1920.jpg&type=View&token=2ff734c148834e4c8882496428574ae2&pid=1459693'),
    new Recipe('A Test Recipe', 'This is simply a test', 'http://dl.maxpixel.freegreatpicture.com/?f=food-1459693_1920.jpg&type=View&token=2ff734c148834e4c8882496428574ae2&pid=1459693')
  ];

  constructor() { }

  ngOnInit() {
  }

}
