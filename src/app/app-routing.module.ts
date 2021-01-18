import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ImportAvvocatoComponent } from './page/import/import-avvocato.component';
import { AvvocatoGridComponent } from './page/avvocato-grid/avvocato-grid.component';
import { InviaPecComponent } from './page/invia-pec/invia-pec.component';
import { InviaMailComponent } from './page/invia-mail/invia-mail.component';
import { LoginComponent } from './page/login/login.component';


const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo:  "login"},
  {path: "home", component: HomeComponent},
  {path: "import-avvocato", component: ImportAvvocatoComponent} ,
  {path: "avvocato-grid", component: AvvocatoGridComponent},
  {path: "invia-pec", component: InviaPecComponent},
  {path: "invia-mail", component: InviaMailComponent},
  {path: "login", component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }