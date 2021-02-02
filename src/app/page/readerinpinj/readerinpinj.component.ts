import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Reader } from 'src/app/entity/reader';
import { ReaderService } from "../../services/reader.service";
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-readerinpinj',
  templateUrl: './readerinpinj.component.html',
  styleUrls: ['./readerinpinj.component.css']
})


export class ReaderInpinjComponent implements OnInit {

  selectedReader: Reader = new Reader();
  editForm!: FormGroup;
  isLoading = false;
  submitted = false;
  @Input() title: any;
  
  constructor(private route: ActivatedRoute,  private readerService: ReaderService, public formBuilder: FormBuilder ) { }
 
  ngOnInit() {  
    let idReader = this.route.snapshot.params['id'];
    this.setForm(idReader)
  }

  private setForm(idReader: number) {
      this.readerService.getReaderById(idReader).subscribe(x => {
        this.selectedReader = x;
        console.log(this.selectedReader.id);
      this.editForm = this.formBuilder.group({
        id: [this.selectedReader.id],
        tipoReaderSel: [this.selectedReader.idTipoReader],
        ipAdress: [this.selectedReader.ipAdress],
        porta: [this.selectedReader.porta],
        separatore: [this.selectedReader.separatore],
        activatePort: [this.selectedReader.activatePort],
        onlinePort: [this.selectedReader.onlinePort],
        greenPort: [this.selectedReader.greenPort],
        redPort: [this.selectedReader.redPort],
        yellowPort: [this.selectedReader.yellowPort]
      });
      }
      
      )
      
  }

  submit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.readerService.updateReader(this.editForm.value).subscribe(x => {
      this.isLoading = false;
    },
    error => {
      console.log(error);
      this.isLoading = false;
    });
  }
 
  get f() { 
    return this.editForm.controls; 
  }
 
  
}






