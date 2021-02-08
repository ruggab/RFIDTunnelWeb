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
      console.log(this.selectedReader.id);
      console.log("reader-->" + this.selectedReader);
      console.log("listantenna-->" + this.selectedReader.listAntenna);
      this.setAntennaArray(this.selectedReader.listAntenna);
      this.editForm = this.formBuilder.group({
          id: [this.selectedReader.id],
          idTipoReader: [this.selectedReader.idTipoReader],
          ipAdress: [this.selectedReader.ipAdress],
          porta: [this.selectedReader.porta],
          separatore: [this.selectedReader.separatore]
      });
    }) 
    //
   // this.setAntennaList(idReader);
    

    
  }

  
 
  get f() { 
    return this.editForm.controls; 
  }

}