import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-wirama',
  templateUrl: './wirama.component.html',
  styleUrls: ['./wirama.component.css']
})
export class WiramaComponent implements OnInit {

  submitted = false;
  
  @Input() title: any;
  @Input() msg: any;
  constructor(public activeModal: NgbActiveModal) { }
  form = new FormGroup({
    ipAdress: new FormControl('', [Validators.required, Validators.maxLength(15)]),
  
  });
  
  get f(){
    return this.form.controls;
  }

  ngOnInit() {
  }
  submit(){
  }

}