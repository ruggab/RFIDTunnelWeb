import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ReaderService } from "../../services/reader.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from '../common/modal/modal.component'
import { TipoReader } from '../../entity/tipoReader';
import { GridOptions } from 'ag-grid-community';

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
  
  columnDefs = [ 
    { field: 'ipAdress', width: 100 },
    { field: 'porta', width: 100 },
    { field: 'tipoReader', sortable: true, filter: true, width: 100 }
    
];


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
    ipAdress: new FormControl('', [Validators.required]),
    porta: new FormControl('', [Validators.required])
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
    console.log(this.form.value);
    this.readerService.createReader(this.form.value).subscribe(
      data => {
        console.log(data);
        this.loading = true;
        this.rowData = data;
      },
      error => console.log(error));
  }


  inviaMail(inviaForm:Object) {
    // this.avvocatoService.inviaMail(inviaForm).subscribe(
    //     data => {this.openDialog()},
    //     error => {this.openErrorDialog()}
    // );
  }

  openDialog() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Succes';
    modalRef.componentInstance.msg = 'Invio Massivo terminato correttamente';
  }
  
  openErrorDialog() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Error';
    modalRef.componentInstance.msg = 'Errore invio massivo';
  }


}
 