import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ReaderService } from "../../services/reader.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from '../common/modal/modal.component'
import { TipoReader } from '../../entity/tipoReader';
import {  HttpErrorResponse } from "@angular/common/http";
import { Reader } from 'src/app/entity/reader';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})

export class ControlPanelComponent implements OnInit {
  //Select box
  tipoReaderList:  Array<TipoReader> = [];
  readerList : any;
  interval:any;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(public readerService: ReaderService, public modalService: NgbModal) { 
   
  }
  
  ngOnInit(): void {
    this.onload();
    //Timer call
  

    this.interval = setInterval(() => {
      this.opensnack();
    }, 1000)

  }
  
  onload() {
    this.setReadersList();
  }

  private setReadersList(){
    this.readerService.getReaderList().subscribe(
      data => {
        console.log(data);
        this.readerList = new MatTableDataSource(data);
        this.readerList.sort = this.sort;
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


  
  startReader(reader:Reader)
  {
    this.readerService.startReader(reader).subscribe(
      data => {
        console.log(data);
        this.readerList = new MatTableDataSource(data);
        this.readerList.sort = this.sort;
        
      },error => {
        console.log(error);
        this.openErrorDialog(error);
    });
  }

  stopReader(reader:Reader)
  {
     
    this.readerService.stopReader(reader).subscribe(
      data => {
        console.log(data);
        this.readerList = new MatTableDataSource(data);
        //this.openDialog(data) 
        
      },error => {
        console.log(error);
        this.openErrorDialog(error);
    });
  }

  openDialog(respose:any) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = respose.stato;
    modalRef.componentInstance.msg = respose.msg;
  }


  opensnack() {
    // I've just commented this so that you're not bombarded with an alert.
    // alert(text);
    console.log("aaaaa");
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  

}
 