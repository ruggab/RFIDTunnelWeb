import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Reader } from 'src/app/entity/reader';
import { ReaderService } from "../../services/reader.service";
import { TipoReader } from 'src/app/entity/tipoReader';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalComponent } from '../common/modal/modal.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  selectedReader: Reader = new Reader();
  tipoReaderList:  Array<TipoReader> = [];
  
  isLoading = false;
  submitted = false;
  @Input() title: any;
  tipoReaderSelected = false;

  constructor(private readerService: ReaderService,public modalService: NgbModal,private router:Router) { 
    console.log("sono in reader")
  }

  form = new FormGroup({
    idTipoReader: new FormControl('', [Validators.required]),
    ipAdress: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    porta: new FormControl('', [ Validators.maxLength(4)]),
    separatore: new FormControl('', [Validators.required, Validators.maxLength(1)])
  });
 
  ngOnInit() { 
    this.setTipoReaders();
  }

  setTipoReaderSelected(){
    this.tipoReaderSelected = true;
    //console.log(this.form.controls.idTipoReader.value)
  }

  private setTipoReaders(){
    this.readerService.getTipoReaderList().subscribe(
      data => {
        this.tipoReaderList = data;
        console.log(data);
      },
      error => {
        console.log(error);
        this.openErrorDialog(error);
      }
    );
  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
 
  submit() {
    this.submitted = true;
    //this.loading = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.readerService.createReader(this.form.value).subscribe(
      data => {
        console.log(data); 
        this.router.navigateByUrl("managereader")
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
 
  get f() { 
    return this.form.controls; 
  }
 
  

}