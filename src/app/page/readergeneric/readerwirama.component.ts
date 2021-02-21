import { Component, OnInit, Input } from '@angular/core';
import { ReaderGenericComponent } from './readergeneric.component';

@Component({
  selector: 'app-readerwirama',
  templateUrl: './readerwirama.component.html',
  styleUrls: ['./readergeneric.component.css']
})
export class ReaderWiramaComponent extends ReaderGenericComponent implements OnInit {


  
 
 
  public setForm(idReader: number) {
    this.readerService.getReaderById(idReader).subscribe(x => {
      this.selectedReader = x;
     
      this.setAntennaArray(this.selectedReader.listAntenna);
      this.editForm = this.formBuilder.group({
          id: [this.selectedReader.id],
          idTipoReader: [this.selectedReader.idTipoReader],
          ipAdress: [this.selectedReader.ipAdress],
          porta: [this.selectedReader.porta],
          portaComandi: [this.selectedReader.portaComandi],
          separatore: [this.selectedReader.separatore]
      });
    }) 
  }

  
 
  get f() { 
    return this.editForm.controls; 
  }

}