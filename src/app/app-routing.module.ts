import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ConfReaderComponent } from './page/confreader/confreader.component';
import { LoginComponent } from './page/login/login.component';
import { ControlPanelComponent } from './page/controlpanel/controlpanel.component';
import { ManageReaderComponent } from './page/managereader/managereader.component';
// import { ReaderInpinjComponent } from './page/readerinpinj/readerinpinj.component';
// import { ReaderWiramaComponent } from './page/readerwirama/readerwirama.component';
import { ReaderComponent } from './page/reader/reader.component';
import { ReaderInpinjComponent } from './page/readergeneric/readerinpinj.component';
import { ReaderWiramaComponent } from './page/readergeneric/readerwirama.component';


const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo:  "login"},
  {path: "home", component: HomeComponent},
  {path: "confreader", component: ConfReaderComponent},
  {path: "login", component: LoginComponent},
  {path: "controlpanel", component: ControlPanelComponent},
  {path: "managereader", component: ManageReaderComponent},
  {path: "readerinpinj/:id", component: ReaderInpinjComponent},
  {path: "readerwirama/:id", component: ReaderWiramaComponent},
  {path: "addreader", component: ReaderComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }