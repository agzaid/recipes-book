import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();
  private recipes:Recipe[]=[
    new Recipe (
    'Tasty Schnitzel',
    'A super-tasty Schnitzel - just awesome!',
    'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('koshari',
    'kushari is one of the traditional Egyptian food. This dish is considered the national dish of Egypt and a very popular street food',
    'https://amiraspantry.com/wp-content/uploads/2018/05/koshari-IG.png',
    [
      new Ingredient('cups of short grain rice', 2.5),
      new Ingredient('package (16 oz dry Pasta, preferably Ditalini or elbow.)', 1),
      new Ingredient('Tablespoon oil.', 2),
      new Ingredient('Salt and Pepper to taste', 1),
      new Ingredient('cups dry brown lentils.', 2)
    ]),
    new Recipe(' Hawawshi Sanawish',
    'The Hawawshi is a famous sandwich to Egypt, it is made with spit breads and spicy ground meat, it is often sold on the street because of its popularity. Today we presents you the best recipe to try this famous Egyptian sandwich',
    'https://i.ytimg.com/vi/PAd3Icziprc/hqdefault.jpg',
    [
      new Ingredient('Flour - Kilogram(s)', 1/2),
      new Ingredient('Salt - Teaspoon(s)', 1),
      new Ingredient('Baking powder - Teaspoon(s)', 1),
      new Ingredient('Yeast - Tablespoon(s)', 1),
      new Ingredient('Sugar - Tablespoon', 1)
    ]),
    new Recipe(' Mahshi',
    'Mahshi is one of the traditional Egyptian food. This dish is considered the national dish of Egypt and a very popular street food',
    'https://i.pinimg.com/originals/b6/87/2e/b6872e6f7ed84c3007345a51068e7bf5.jpg',
    [
      new Ingredient('Onion - 1 Piece(s)', 1),
      new Ingredient('package (16 oz dry Pasta, preferably Ditalini or elbow.)', 1),
      new Ingredient('Tablespoon oil.', 2),
      new Ingredient('Salt and Pepper to taste', 1),
      new Ingredient('cups dry brown lentils.', 2)
    ]),
    new Recipe('Green Burger',
    'Taamea is one of the traditional Egyptian food. This dish is considered the national dish of Egypt and a very popular street food',
    'https://i.ytimg.com/vi/kipxiXcVriU/maxresdefault.jpg',
    [
      new Ingredient('cups of short grain rice', 2.5),
      new Ingredient('package (16 oz dry Pasta, preferably Ditalini or elbow.)', 1),
      new Ingredient('Tablespoon oil.', 2),
      new Ingredient('Salt and Pepper to taste', 1),
      new Ingredient('cups dry brown lentils.', 2)
    ])
];


  constructor(private slService:ShoppingListService) { }

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes(){
  return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
