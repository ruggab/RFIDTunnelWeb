import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './page/common/header/header.component';
import { FooterComponent } from './page/common/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from './page/common/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfReaderComponent } from './page/confreader/confreader.component';
import { LoginComponent } from './page/login/login.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { WiramaComponent } from './page/modalwirama/wirama.component';
import { InpinjComponent } from './page/modalinpinj/inpinj.component';
import { ControlPanelComponent } from './page/controlpanel/controlpanel.component';
import { ManageReaderComponent } from './page/managereader/managereader.component';
import { ReaderWiramaComponent } from './page/readergeneric/readerwirama.component';
import { ReaderInpinjComponent } from './page/readergeneric/readerinpinj.component';
import { ReaderGenericComponent } from './page/readergeneric/readergeneric.component';
import { ReaderComponent } from './page/reader/reader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    WiramaComponent,
    InpinjComponent,
    ConfReaderComponent,
    ManageReaderComponent,
    LoginComponent,
    ReaderGenericComponent,
    ReaderWiramaComponent,
    ReaderInpinjComponent,
    ReaderComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { 
  
  
}


