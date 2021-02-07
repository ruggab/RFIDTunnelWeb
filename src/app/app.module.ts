import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './page/common/header/header.component';
import { FooterComponent } from './page/common/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './page/common/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './page/login/login.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ControlPanelComponent } from './page/controlpanel/controlpanel.component';
import { ManageReaderComponent } from './page/managereader/managereader.component';
import { ReaderWiramaComponent } from './page/readergeneric/readerwirama.component';
import { ReaderInpinjComponent } from './page/readergeneric/readerinpinj.component';
import { ReaderGenericComponent } from './page/readergeneric/readergeneric.component';
import { ReaderComponent } from './page/reader/reader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AntennaComponent } from './page/antenna/antenna.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    ManageReaderComponent,
    LoginComponent,
    ReaderGenericComponent,
    ReaderWiramaComponent,
    ReaderInpinjComponent,
    ReaderComponent,
    AntennaComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    SharedModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { 
  
  
}


