import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {RecipeListPage} from "../recipe-list/recipe-list";

/**
 * Generated class for the RecipeSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-search',
  templateUrl: 'recipe-search.html',
})
export class RecipeSearchPage {

  selectedValues: any[];
  data: string;
  myInput: string ;
  recipes: any= [];
  ingeredeientName: any= [];
  url: string;
  ingredientAutoCompleteUrl: string;
  message: string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient: HttpClient) {
    // this.searchRecipieProvider = searchRecipieProvider;
    this.selectedValues = [];
    this.url = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=58ac03dd183446cfb4417107e519ef02&ingredients=';
    this.ingredientAutoCompleteUrl = 'https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=58ac03dd183446cfb4417107e519ef02&query=';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeSearchPage');
  }

  filterList(evt){

   this.data = evt.srcElement.value;

   this.autoCompleteIngredients(evt.srcElement.value);
    console.log(this.data);

  }

  autoCompleteIngredients(ingredientElements: string) : void {
    // ingredients.toString();
    let url1 : string;
    url1 = this.ingredientAutoCompleteUrl + ingredientElements;

    this.httpClient.get(url1).subscribe((response) => {

      console.log(response);
      this.ingeredeientName = response;
    });

  }

  selectIngeredeientName(inName: string){
     this.myInput = inName;
     this.data = inName;
      this.ingeredeientName = null;
      this.addCriteria()
  }

  addCriteria(){
    this.recipes = [];
    var checkForNullAndEmpty = this.checkForNullAndEmpty(this.data);
    if(checkForNullAndEmpty){
      if(this.checkForNullAndEmpty(this.selectedValues.length)) {
        let len = this.selectedValues.length
        this.selectedValues[len] = this.data;
        this.message = '';
      }
    }
    else{
      this.message = 'Please Type an ingredient';
    }
    this.data='';
    this.myInput="";

  }

  public checkForNullAndEmpty( data1: any) {
           return data1 !== undefined && data1 !== null && data1 !== "";

         }

  deleteSelected(dataDelete: string){

    const indexForDelete = this.selectedValues.findIndex((i) => {
      return (i === dataDelete);
    });
    if (-1 != indexForDelete) {
      this.selectedValues.splice(indexForDelete, 1);
      console.log("Ingredient deleted");
    }


  }

  searchReceipies(){
    if((!this.checkForNullAndEmpty(this.selectedValues)) || this.selectedValues.length===0){
   // if( this.selectedValues == undefined || this.selectedValues == null){
     this.message = "Please Add an Ingredient";
   }
   else{
     this.message= '';
     this.findByIngredients(this.selectedValues);

   }
  }

  findByIngredients(ingredients: any) : any {
    // ingredients.toString();
    let recipeSearched: any = [];
    let url1 : string;
   url1 = this.url + this.selectedValues.toString();

      this.httpClient.get(url1).subscribe((response) => {

      console.log(response);
        // this.recipes = response;
        recipeSearched = response;

        if(this.checkForNullAndEmpty(recipeSearched)){
          this.navCtrl.push(RecipeListPage, { recipeSearched: recipeSearched} );
        }
    });


  }

}
