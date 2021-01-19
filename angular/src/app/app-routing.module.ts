import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainAppLoadComponent} from "./main-app-load/main-app-load.component";
import {PostComponent} from "./post/post.component"; // CLI imports router



const routes: Routes = [
  { path: '', component: MainAppLoadComponent },
  { path: 'post/:id', component: PostComponent }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

