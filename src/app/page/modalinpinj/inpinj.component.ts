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
  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, 
              private usersService: ReaderService, private formBuilder: FormBuilder, 
              private router: Router) { }
 
  ngOnInit() {
 
    this.setForm()
  }
 
  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    // this.usersService.updateUser(this.editForm.value).subscribe(x => {
    //   this.isLoading = false;
    //   this.modal.close('Yes');
    // },
    //   error => {
    //     this.isLoading = false;
    //   });
  }
 
  get f() { 
    return this.editForm.controls; 
  }
 
  private setForm() {
    console.log(this.selectedReader);
     
    this.editForm = this.formBuilder.group({
      id: [this.selectedReader.id],
      ipAdress: [this.selectedReader.ipAdress, Validators.required],
      porta: [this.selectedReader.porta, Validators.required],
      separatore: [{ value: this.selectedReader.separatore, disabled: true }, [Validators.email, Validators.required]],
      
    });
  }
}