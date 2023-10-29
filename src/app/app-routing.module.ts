import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  HomeModule
],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
