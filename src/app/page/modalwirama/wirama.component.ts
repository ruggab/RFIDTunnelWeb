import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Reader } from 'src/app/entity/reader';
import { ActivatedRoute, Router } from '@angular/router';
import { ReaderService } from "../../services/reader.service";
@Component({
  selector: 'app-wirama',
  templateUrl: './wirama.component.html',
  styleUrls: ['./wirama.component.css']
})
export class WiramaComponent implements OnInit {

  selectedReader: Reader = new Reader();
  editForm!: FormGroup;
  submitted = false;
  @Input() title: any;
  constructor(public activeModal: NgbActiveModal, private route: ActivatedRoute, 
              private usersService: ReaderService, private formBuilder: FormBuilder, 
              private router: Router) { }
 
  ngOnInit() { 
 
    this.setForm()
  }
 
  submit() {
    
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
      antenna1: [this.selectedReader.antenna3],
      antenna2: [this.selectedReader.antenna4]
    });
  }

}