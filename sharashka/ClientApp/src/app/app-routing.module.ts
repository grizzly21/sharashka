import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {ItemsComponent} from "./items/items.component";

const routes: Routes = [
  {path: 'watches', component: ItemsComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
