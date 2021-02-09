import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ReaderService } from "../../services/reader.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from '../common/modal/modal.component'
import { HttpErrorResponse } from "@angular/common/http";
import { Antenna, Reader } from 'src/app/entity/reader';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-antenna',
  templateUrl: './antenna.component.html',
  styleUrls: ['./antenna.component.css']
})

export class AntennaComponent implements OnInit {
 
  submitted!:boolean;
  selectedReader!:Reader;
  form!:FormGroup;
  selectedAntenna!:Antenna;
  
  constructor(public readerService: ReaderService, 
              public modalService: NgbModal,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<AntennaComponent>,
              public formBuilder: FormBuilder,
              ) 
  { 
    this.selectedReader =  data.selectedReader;
    this.selectedAntenna =  data.selectedAntenna;
  }
  
  ngOnInit(): void {
    if (this.selectedReader) {
      this.setForm();
    } else {
      this.setEditForm();
    }
   
  }

	public setForm() {
   
      this.form = this.formBuilder.group({
        id: new FormControl(''),
        idReader: new FormControl(this.selectedReader.id),
        position: new FormControl(this.selectedReader.listAntenna.length+1),
        enable: new FormControl(false),
        maxRxSensitivity: new FormControl(false),
        maxTxPower: new FormControl(false),
        powerinDbm: new FormControl(''),
        sensitivityinDbm: new FormControl('')
      });
    }

    public setEditForm() {
   
      this.form = this.formBuilder.group({
        id: new FormControl(this.selectedAntenna.id),
        idReader: new FormControl(this.selectedAntenna.idReader),
        position: new FormControl(this.selectedAntenna.position),
        enable: new FormControl(this.selectedAntenna.enable),
        maxRxSensitivity: new FormControl(this.selectedAntenna.maxRxSensitivity),
        maxTxPower: new FormControl(this.selectedAntenna.maxTxPower),
        powerinDbm: new FormControl(this.selectedAntenna.powerinDbm),
        sensitivityinDbm: new FormControl(this.selectedAntenna.sensitivityinDbm)
      });
    }
  
 

  get f(){
    return this.form.controls;
  }

  openErrorDialog(error:HttpErrorResponse) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = error.error.error;
    modalRef.componentInstance.msg = error.error.message;
    ;
  }

  openDialog(respose:any) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = respose.stato;
    modalRef.componentInstance.msg = respose.msg;
  }
   

  onAddAntenna(){
    this.submitted = true;
    console.log(this.form.value)
    if (this.form.invalid) {
      return;
    }
    
    this.selectedReader.listAntenna.push(this.form.value);
    this.dialogRef.close();
  }

  onAnnulla() {
    this.dialogRef.close();
  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  validateNumber(e: any) {
    let input = String.fromCharCode(e.charCode);
    const reg = /^\d+(\.\d{1,2})?$/;
    if (!reg.test(input)) {
      e.preventDefault();
    }
}



}
 