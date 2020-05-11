import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeSearchPage } from './recipe-search';

@NgModule({
  declarations: [
    // RecipeSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeSearchPage),
  ],
})
export class RecipeSearchPageModule {}
