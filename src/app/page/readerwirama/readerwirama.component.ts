import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Reader } from 'src/app/entity/reader';
import { ReaderService } from "../../services/reader.service";
@Component({
  selector: 'app-readerwirama',
  templateUrl: './readerwirama.component.html',
  styleUrls: ['./readerwirama.component.css']
})
export class ReaderWiramaComponent implements OnInit {

  selectedReader: Reader = new Reader();
  editForm!: FormGroup;
  isLoading = false;
  submitted = false;
  @Input() title: any;
  constructor(private route: ActivatedRoute, private readerService: ReaderService, private formBuilder: FormBuilder) { }
 
  ngOnInit() { 
    this.setForm()
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
 
  private setForm() {
    console.log(this.selectedReader.id);
     
    this.editForm = this.formBuilder.group({
      id: [this.selectedReader.id],
      tipoReaderSel: [this.selectedReader.idTipoReader],
      ipAdress: [this.selectedReader.ipAdress],
      porta: [this.selectedReader.porta],
      separatore: [this.selectedReader.separatore]
    });
  }

}