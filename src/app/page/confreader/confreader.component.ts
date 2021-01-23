import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ReaderService } from "../../services/reader.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from '../common/modal/modal.component'
import { TipoReader } from '../../entity/tipoReader';
import { GridOptions } from 'ag-grid-community';
import {  HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-confreader',
  templateUrl: './confreader.component.html',
  styleUrls: ['./confreader.component.css']
})

export class ConfReaderComponent implements OnInit {
  //Select box
  tipoReaderList: TipoReader[] = [];
  
  //GRID
  loading: boolean = false; 
  rowData: any;
  gridOptions:GridOptions;
  submitted = false;
  
  columnDefs = [ 
    { field: 'idTipoReader' },
    { field: 'ipAdress'},
    { field: 'porta' }];

    numberOnly(event:any): boolean {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
  
    }

  constructor(public readerService: ReaderService, public modalService: NgbModal) { 
    this.gridOptions = <GridOptions>{
      onGridReady: () => {
         // this.gridOptions.api?.setAlwaysShowVerticalScroll;
          this.gridOptions.api?.paginationGetCurrentPage;
          this.gridOptions.api?.paginationGoToNextPage;
      }
   };
  }

  ngOnInit(): void {
    this.onload();
  }

  form = new FormGroup({
    tipoReaderSel: new FormControl('', [Validators.required]),
    ipAdress: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    porta: new FormControl('', [Validators.required, Validators.maxLength(4)])
  });
  

  get f(){
    return this.form.controls;
  }

  changeTipoReader(event:Event) {
    console.log(event.target);
  }

  onload() {
    //Sull onload carico la select box
    this.loading = false;
    this.readerService.getTipoReaderList().subscribe(
      data => {
        //this.form.setValue({numMailDaInviare: data, numMailSel:"10"});
        this.tipoReaderList = data;
        console.log(data);
      },
      error => console.log(error));
  }
  
  submit(){
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.readerService.createReader(this.form.value).subscribe(
      data => {
        console.log(data);
        this.loading = true;
        this.rowData = data;
      },error => {
        console.log(error);
        this.loading = false;
        this.openErrorDialog(error);
    });
     
  }


  

  openDialog() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Succes';
    modalRef.componentInstance.msg = 'Invio Massivo terminato correttamente';
  }
  
 

  openErrorDialog(error:HttpErrorResponse) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = error.error.error;
    modalRef.componentInstance.msg = error.error.message;
    ;
  }


}
 