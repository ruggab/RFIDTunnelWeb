import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, } from '@angular/forms';
import { Reader } from 'src/app/entity/reader';
import { ReaderService } from "../../services/reader.service";

@Component({
  selector: 'app-inpinj',
  templateUrl: './inpinj.component.html',
  styleUrls: ['./inpinj.component.css']
})


export class InpinjComponent implements OnInit {

  selectedReader: Reader = new Reader();
  editForm!: FormGroup;
  isLoading = false;
  submitted = false;
  @Input() title: any;
  constructor(public activeModal: NgbActiveModal,  
              private readerService: ReaderService, private formBuilder: FormBuilder, 
              ) { }
 
  ngOnInit() {  
    this.setForm()
  }
 

  submit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.readerService.updateReader(this.editForm.value).subscribe(x => {
      this.isLoading = false;
      this.activeModal.close('Yes');
    },
      error => {
        console.log(error);
        this.isLoading = false;
      });
  }
 
  get f() { 
    return this.editForm.controls; 
  }


 
  private setForm() {
    console.log(this.selectedReader.id);
     
    this.editForm = this.formBuilder.group({
      id: [this.selectedReader.id],
      tipoReaderSel: [this.selectedReader.idTipoReader],
      ipAdress: [this.selectedReader.ipAdress],
      porta: [this.selectedReader.porta],
      numAntenne: [this.selectedReader.numAntenne],
      separatore: [this.selectedReader.separatore],
      activatePort: [this.selectedReader.activatePort],
      onlinePort: [this.selectedReader.onlinePort],
      greenPort: [this.selectedReader.greenPort],
      redPort: [this.selectedReader.redPort],
      yellowPort: [this.selectedReader.yellowPort]
    });
  }
}






