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
      this.editForm = this.formBuilder.group({
          id: [this.selectedReader.id],
          idTipoReader: [this.selectedReader.idTipoReader],
          ipAdress: [this.selectedReader.ipAdress],
          porta: [this.selectedReader.porta],
          separatore: [this.selectedReader.separatore]
      });
    }) 
  }


  submit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.readerService.updateReader(this.editForm.value).subscribe(x => {
      this.isLoading = false;
      this.router.navigateByUrl("managereader");
    },
      error => {
        console.log(error);
        this.isLoading = false;
      });
  }
 
  get f() { 
    return this.editForm.controls; 
  }

}