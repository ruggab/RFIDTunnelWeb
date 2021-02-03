import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Reader } from 'src/app/entity/reader';
import { ReaderService } from "../../services/reader.service";
import { TipoReader } from 'src/app/entity/tipoReader';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalComponent } from '../common/modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-readergeneric',
  templateUrl: './readergeneric.component.html',
  styleUrls: ['./readergeneric.component.css']
})
export class ReaderGenericComponent implements OnInit {

  public editForm!: FormGroup;
  public selectedReader: Reader = new Reader();
  public tipoReaderList:  Array<TipoReader> = [];
  public isLoading = false;
  public submitted = false;
  public idReader!: number;

  
  
  constructor(public route: ActivatedRoute,  public readerService: ReaderService,public modalService: NgbModal, public formBuilder: FormBuilder,public router:Router ) { }

  
 
  ngOnInit() {
    this.setTipoReaders();  
    this.idReader = this.route.snapshot.params['id'];
    this.setForm(this.idReader)
  }

  setForm(idReader: number){
    
  }

  protected setTipoReaders(){
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

  protected numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
 
  

  openErrorDialog(error:HttpErrorResponse) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = error.error.error;
    modalRef.componentInstance.msg = error.error.message;
  }
 
  
 
  

}