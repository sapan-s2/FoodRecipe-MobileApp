import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PagesRecipeDetailsPage} from "../pages-recipe-details/pages-recipe-details";
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the RecipeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html',
})
export class RecipeListPage {

  recipeDetailsUrl: string;
   recipeSearched: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpClient: HttpClient) {
    this.recipeSearched = navParams.get("recipeSearched");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeListPage');

  }

  sendRecipeDetails(r){
    let recipe;
    const id = r.id;
    this.recipeDetailsUrl = 'https://api.spoonacular.com/recipes/'+id+'/information?apiKey=58ac03dd183446cfb4417107e519ef02';

    this.httpClient.get(this.recipeDetailsUrl).subscribe((response) => {

      console.log(response);
      recipe = response;
      if(recipe != null){
        this.navCtrl.push(PagesRecipeDetailsPage, { recipe: recipe} );
      }
    });

  }



}
