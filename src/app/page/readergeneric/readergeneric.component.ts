import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Antenna, Reader } from 'src/app/entity/reader';
import { ReaderService } from "../../services/reader.service";
import { TipoReader } from 'src/app/entity/tipoReader';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalComponent } from '../common/modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AntennaComponent } from '../antenna/antenna.component';
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

  antennaTable= new MatTableDataSource(Array<Antenna>());
  //public antennaList:  Array<Antenna> = [];
  matDialogRef!: MatDialogRef<AntennaComponent>;
  
  constructor(public route: ActivatedRoute,  
    public matDialog: MatDialog,
    public modalService: NgbModal, 
    public readerService: ReaderService, 
    public formBuilder: FormBuilder,
    public router:Router ) { }

  
 
  ngOnInit() {
    this.setTipoReaders();  
    this.idReader = this.route.snapshot.params['id'];
    this.setForm(this.idReader)
  }

  //Metodo che viene utilizzato nelle classi specifiche
  setForm(idReader: number){
    
  }

  //CARICA la combo dei readers
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

  //Controllo numerico sui campi form
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
 




  ///GEDTIONE ANTENNE

  
  openModal() {
    
    this.matDialogRef = this.matDialog.open(AntennaComponent, {
      data: { selectedReader: this.selectedReader },
      disableClose: true,
      width: '640px'//,disableClose: true 
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      this.antennaTable= new MatTableDataSource(this.selectedReader.listAntenna);
      if ((res == true)) {
       console.log(res);
       console.log(this.selectedReader);
      }
    });
  }
 
  // public setAntennaList(idReader: number){
  //   this.readerService.getAntennaList(idReader).subscribe(
  //     data => {
  //       console.log(data);
  //       this.antennaTable= new MatTableDataSource(data);
  //     },error => {
  //       console.log(error);
  //       this.openErrorDialog(error);
  //   });
  // }

  
  public setAntennaArray(listAntenna: Array<Antenna>){
    this.antennaTable= new MatTableDataSource(listAntenna);
  
  }
  

  deleteItem(antenna:Antenna)
  {
    console.log(antenna);
    const index = this.selectedReader.listAntenna.indexOf(antenna);
    this.selectedReader.listAntenna.splice(index, 1)
    this.antennaTable= new MatTableDataSource(this.selectedReader.listAntenna);
  }
  

  submit() {
    console.log(this.selectedReader);
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.readerService.updateReader(this.selectedReader).subscribe(x => {
      this.isLoading = false;
      this.router.navigateByUrl("managereader");
    },
    error => {
      console.log(error);
      this.isLoading = false;
    });
  }

}