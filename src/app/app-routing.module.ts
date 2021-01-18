import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ConfReaderComponent } from './page/confreader/confreader.component';
import { LoginComponent } from './page/login/login.component';


const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo:  "login"},
  {path: "home", component: HomeComponent},
  {path: "confreader", component: ConfReaderComponent},
  {path: "login", component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }