import { HttpClient,HttpClientModule } from '@angular/common/http';
import {Http, Response, } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Injectable} from "@angular/core";

/*
  Generated class for the SearchRecipieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchRecipieProvider {

  url: string;
  recipies :  Observable<any>;
  // public httpClient: HttpClient

  constructor(public httpClient: HttpClientModule, private  http: Http) {
    console.log('Hello SearchRecipieProvider Provider');
    this.url = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=Apple, Cheese,banana&apiKey=58ac03dd183446cfb4417107e519ef02';
    // this.httpClient = httpClient;
  }

  findByIngredients(ingredients: []) : [] {
    // ingredients.toString();

    this.recipies =  this.httpClient.get(url,null,null).subscribe((response) => {
      console.log(response);
    });
    return recipies;
  }

}
