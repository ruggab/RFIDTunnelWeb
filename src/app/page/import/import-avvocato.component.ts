import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from '../common/modal/modal.component'

@Component({
  selector: 'app-import-avvocato',
  templateUrl: './import-avvocato.component.html',
  styleUrls: ['./import-avvocato.component.css']
})


export class ImportAvvocatoComponent implements OnInit {
  // Variable to store shortLink from api response 
  shortLink: string = ""; 
  loading: boolean = false; // Flag variable 
  file!: File; // Variable to store file 

  // Inject service  
  constructor(private fileUploadService: FileUploadService,public modalService: NgbModal) { 

  } 

  ngOnInit(): void { 
  } 

  // On file Select 
  onChange(event:Event) {
      const element = event.currentTarget as HTMLInputElement;
      let fileList: FileList | null = element.files;
      if (fileList) {
        console.log("FileUpload -> files", fileList);
        this.file = fileList[0];
      }
  } 

 

  // OnClick of button Upload 
  onUpload() { 
      this.loading = !this.loading; 
      console.log(this.file); 
      let out = this.fileUploadService.uploadAvvocati(this.file).subscribe( 
        data => {this.openDialog(),this.loading=false},
        error => {this.openErrorDialog(),this.loading=false}
        
      ); 

     
  } 

 
  
  openDialog() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Succes';
    modalRef.componentInstance.msg = 'File Caricato correttamente';
  }
  
  openErrorDialog() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Error';
    modalRef.componentInstance.msg = 'Errore di sistema';
  }

} 



