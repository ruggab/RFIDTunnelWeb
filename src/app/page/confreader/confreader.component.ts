import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ReaderService } from "../../services/reader.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from '../common/modal/modal.component'
import { TipoReader } from '../../entity/tipoReader';
import {  HttpErrorResponse } from "@angular/common/http";
import { ButtonRendererComponent } from './button-renderer.component';
import { WiramaComponent } from '../../page/modalwirama/wirama.component';
import { InpinjComponent } from '../../page/modalinpinj/inpinj.component';
import { Reader } from 'src/app/entity/reader';

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
  submitted = false;

  frameworkComponents: any;
  api: any;

  constructor(public readerService: ReaderService, public modalService: NgbModal) { 
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }
  
  columnDefs = [ 
    { field: 'idTipoReader',editable: true },
    { field: 'ipAdress', editable: true},
    { field: 'porta',editable: true },
    { field: 'separatore',editable: true },
    { headerName: 'Edit', cellRenderer: 'buttonRenderer', cellRendererParams: {
          onClick: this.onEditButtonClick.bind(this),
          label: 'Edit'
          },
    },
    { headerName: 'Delete', cellRenderer: 'buttonRenderer', cellRendererParams: {
          onClick: this.onDeleteButtonClick.bind(this),
          label: 'Delete'
          },
    },
  ];


    numberOnly(event:any): boolean {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
  
    }

  

  ngOnInit(): void {
    this.onload();
  }

  form = new FormGroup({
    tipoReaderSel: new FormControl('', [Validators.required]),
    ipAdress: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    porta: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    separatore: new FormControl('', [Validators.required, Validators.maxLength(1)])
  });
  

  get f(){
    return this.form.controls;
  }

  changeTipoReader(event:Event) {
    console.log(event.target);
  }

  private setReadersList(){
    this.readerService.getReaderList().subscribe(
      data => {
        console.log(data);
        //this.loading = true;
        this.rowData = data;
      },error => {
        console.log(error);
        //this.loading = false;
        this.openErrorDialog(error);
    });
  }

  private setTipoReaders(){
    this.readerService.getTipoReaderList().subscribe(
      data => {
        //this.form.setValue({numMailDaInviare: data, numMailSel:"10"});
        this.tipoReaderList = data;
        console.log(data);
      },
      error => {
        console.log(error);
        this.openErrorDialog(error);
      }
    );
  }

  onload() {
    this.setTipoReaders();
    this.setReadersList();
  }
  
  submit(){
    this.submitted = true;
    //this.loading = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.readerService.createReader(this.form.value).subscribe(
      data => {
        console.log(data);
        //this.loading = true;
        this.rowData = data;
      },error => {
        console.log(error);
        //this.loading = false;
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

  onEditButtonClick(params:any)
  {
    this.openEditReaderDialog(params.node.data);
    console.log(params.node.data) ; 
   
  }
  
  openEditReaderDialog(reader: Reader) {
    let modalRef = null;
    if (reader.idTipoReader===1){
      modalRef = this.modalService.open(InpinjComponent, { centered: true });
      modalRef.componentInstance.title = 'Reader Inpinj';
      modalRef.componentInstance.selectedReader = reader;
     
    }
    if (reader.idTipoReader===2){
      const modalRef = this.modalService.open(WiramaComponent);
      modalRef.componentInstance.title = 'Reader Wirama';
      modalRef.componentInstance.selectedReader = reader;
    }

    

    modalRef?.result.then((yes) => {
      console.log("Yes Click");
      this.setReadersList();
    },(cancel) => {
        console.log("Cancel Click");
      })
    
  }
  
  onDeleteButtonClick(params:any)
  {
    let idremoved = params.data.id;
    this.readerService.deleteReader(idremoved).subscribe(
      data => {
        console.log(data);
       // this.rowData = data;
        
      },error => {
        console.log(error);
        this.openErrorDialog(error);
    });
   // this.api.updateRowData();
    //this.api.updateRowData({remove: [params.data]});
    this.api.applyTransaction({remove: [params.node.data]});
  }

  onGridReady(params:any)
  {
    this.api = params.api;
  }



}
 