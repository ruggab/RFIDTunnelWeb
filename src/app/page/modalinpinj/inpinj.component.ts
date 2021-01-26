import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Reader } from 'src/app/entity/reader';
import { ActivatedRoute, Router } from '@angular/router';
import { ReaderService } from "../../services/reader.service";

@Component({
  selector: 'app-inpinj',
  templateUrl: './inpinj.component.html',
  styleUrls: ['./inpinj.component.css']
})


export class InpinjComponent implements OnInit {

  selectedReader: Reader = new Reader();
  editForm!: FormGroup;
  isLoading = false;
  submitted = false;
  @Input() title: any;
  constructor(public activeModal: NgbActiveModal,  
              private readerService: ReaderService, private formBuilder: FormBuilder, 
              private router: Router) { }
 
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
      this.activeModal.close('Yes');
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
      ipAdress: [this.selectedReader.ipAdress],
      porta: [this.selectedReader.porta],
      separatore: [this.selectedReader.separatore],
      antenna3: [this.selectedReader.antenna3],
      antenna4: [this.selectedReader.antenna4],
      antenna5: [this.selectedReader.antenna5]
    });
  }
}