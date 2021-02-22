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
        this.setAntennaArray(this.selectedReader.listAntenna);
        this.editForm = this.formBuilder.group({
            id: [this.selectedReader.id],
            idTipoReader: [this.selectedReader.idTipoReader],
            ipAdress: [this.selectedReader.ipAdress],
           
            separatore: [this.selectedReader.separatore],
            activatePort: [this.selectedReader.activatePort],
            onlinePort: [this.selectedReader.onlinePort],
            greenPort: [this.selectedReader.greenPort],
            redPort: [this.selectedReader.redPort],
            yellowPort: [this.selectedReader.yellowPort],

            createOutFile: [this.selectedReader.createOutFile],
            nameOutLog: [this.selectedReader.nameOutLog],
            extentionOutLog: [this.selectedReader.extentionOutLog],
            createErrFile: [this.selectedReader.createErrFile],
            nameErrLog: [this.selectedReader.nameErrLog],
            extentionErrLog: [this.selectedReader.extentionErrLog],
            
           
            

        });
      })   
  }

 
 

  get f() { 
    return this.editForm.controls; 
  }
 
  
}






