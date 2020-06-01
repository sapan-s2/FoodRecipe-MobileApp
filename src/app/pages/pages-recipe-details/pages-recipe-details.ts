import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PagesRecipeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-recipe-details',
  templateUrl: 'pages-recipe-details.html',
})
export class PagesRecipeDetailsPage {

  url: string;
  recipe: any;
  flag: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams
              ) {
    this.flag = false
    if (this.navParams.get("recipe")!= null && this.navParams.get("recipe").analyzedInstructions[0] != null ) {
      this.recipe = this.navParams.get("recipe").analyzedInstructions[0];
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesRecipeDetailsPage');

  }

}
