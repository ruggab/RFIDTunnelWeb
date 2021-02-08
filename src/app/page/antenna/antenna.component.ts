import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ReaderService } from "../../services/reader.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from '../common/modal/modal.component'
import { HttpErrorResponse } from "@angular/common/http";
import { Reader } from 'src/app/entity/reader';
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
  
  constructor(public readerService: ReaderService, 
              public modalService: NgbModal,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<AntennaComponent>,
              public formBuilder: FormBuilder,
              ) 
  { 
    this.selectedReader =  data.selectedReader;
  }
  
  ngOnInit(): void {
    this.setForm();
  }

	public setForm() {
   
      this.form = this.formBuilder.group({
        id: new FormControl(''),
        idReader: new FormControl(this.selectedReader.id),
        position: new FormControl(this.selectedReader.listAntenna.length+1),
        maxRxSensitivity: new FormControl(false),
        maxTxPower: new FormControl(false),
        powerinDbm: new FormControl(''),
        sensitivityinDbm: new FormControl('')
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



}
 