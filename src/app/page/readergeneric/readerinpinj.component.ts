import { Component, OnInit} from '@angular/core';
import { ReaderGenericComponent } from './readergeneric.component';

@Component({
  selector: 'app-readerinpinj',
  templateUrl: './readerinpinj.component.html',
  styleUrls:  ['./readergeneric.component.css']
})


export class ReaderInpinjComponent extends ReaderGenericComponent implements OnInit {

  
  
  

  public setForm(idReader: number) {
      this.readerService.getReaderById(idReader).subscribe(x => {
        this.selectedReader = x;
        console.log(this.selectedReader.id);
        //
       
        this.editForm = this.formBuilder.group({
            id: [this.selectedReader.id],
            idTipoReader: [this.selectedReader.idTipoReader],
            ipAdress: [this.selectedReader.ipAdress],
            porta: [this.selectedReader.porta],
            separatore: [this.selectedReader.separatore],
            activatePort: [this.selectedReader.activatePort],
            onlinePort: [this.selectedReader.onlinePort],
            greenPort: [this.selectedReader.greenPort],
            redPort: [this.selectedReader.redPort],
            yellowPort: [this.selectedReader.yellowPort]
        });
      })   
  }

 
 

  get f() { 
    return this.editForm.controls; 
  }
 
  
}






