import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

   recipeSearched: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recipeSearched = navParams.get("recipeSearched");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeListPage');

  }

}
