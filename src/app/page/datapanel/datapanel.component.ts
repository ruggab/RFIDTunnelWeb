import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ReaderService } from "../../services/reader.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from '../common/modal/modal.component'
import {  HttpErrorResponse } from "@angular/common/http";
import { Reader } from 'src/app/entity/reader';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './datapanel.component.html',
  styleUrls: ['./datapanel.component.css']
})

export class DataPanelComponent implements OnInit {
  
  dataReaderList : any;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(public readerService: ReaderService, public modalService: NgbModal) { 
   
  }
  
  ngOnInit(): void {
    this.onload();
  }
  
  onload() {
    this.setDataReadersList();
  }

  private setDataReadersList(){
    this.readerService.getDataReaderList().subscribe(
      data => {
        console.log(data);
        this.dataReaderList = new MatTableDataSource(data);
        this.dataReaderList.sort = this.sort;
      },error => {
        console.log(error);
        this.openErrorDialog(error);
    });
  }

  openErrorDialog(error:HttpErrorResponse) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = error.error.error;
    modalRef.componentInstance.msg = error.error.message;
  }


  openDialog(respose:any) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = respose.stato;
    modalRef.componentInstance.msg = respose.msg;
  }


}
 