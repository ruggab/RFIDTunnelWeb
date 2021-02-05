import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ReaderService } from "../../services/reader.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from '../common/modal/modal.component'
import { HttpErrorResponse } from "@angular/common/http";
import { Reader } from 'src/app/entity/reader';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-managereader',
  templateUrl: './managereader.component.html',
  styleUrls: ['./managereader.component.css']
})
 

export class ManageReaderComponent implements OnInit {
 
  readerList : Array<Reader> = [];
  loading: boolean = false; 
  submitted = false;
  dataSource= new MatTableDataSource();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private readerService: ReaderService, private modalService: NgbModal, private router:Router) { 
     
  }

  

  ngOnInit() {
    this.onload();
    
  }

  onload() {
    this.setReadersList();
  }
  

  private setReadersList(){
    this.readerService.getReaderList().subscribe(
      data => {
        console.log(data);
       
        this.readerList = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      },error => {
        console.log(error);
        
        this.openErrorDialog(error);
    });
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
   
  addNewReader()
  {
    this.router.navigateByUrl("addreader");
  }

  
  editItem(reader:Reader)
  {
    
    
    if (reader.idTipoReader===1){
      this.router.navigateByUrl(`readerinpinj/${reader.id}`);
    }
    if (reader.idTipoReader===2){
      this.router.navigateByUrl(`readerwirama/${reader.id}`);
    }
    
    
    console.log(reader) ; 
   
  }
  
  
  deleteItem(reader:Reader)
  {
    //let idremoved = params.data.id;
    this.readerService.deleteReader(reader.id).subscribe(
      data => {
        console.log(data);
        this.setReadersList(); 
        
      },error => {
        console.log(error);
        this.openErrorDialog(error);
    });
  }

 



}
 