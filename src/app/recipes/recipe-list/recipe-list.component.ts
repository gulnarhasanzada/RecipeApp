import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('Test Recipe1', 'This is just a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),
    new Recipe('Test Recipe3', 'This is jus a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg')
  ];

  onRecipeSelect(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
