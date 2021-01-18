import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AvvocatoService } from "../../services/avvocato.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from '../common/modal/modal.component'

@Component({
  selector: 'app-invia-pec',
  templateUrl: './invia-pec.component.html',
  styleUrls: ['./invia-pec.component.css']
})
export class InviaPecComponent implements OnInit {
  numPecList: any = ['10', '100', '1000']

  constructor(private avvocatoService: AvvocatoService, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.onload();
  }

  form = new FormGroup({
    numPecDaInviare: new FormControl('', [Validators.required]),
    numPecSel: new FormControl('', [Validators.required])
   
  });
  
  get f(){
    return this.form.controls;
  }


  changeNumPecSel(event:Event) {
    console.log(event.target);
  }

  onload() {
    this.avvocatoService.getNumPecDaInviare().subscribe(
      data => {
        this.form.setValue({numPecDaInviare: data, numPecSel:"10"});
        
        console.log(data);
      },
      error => console.log(error));
  }
  
  submit(){
    console.log(this.form.value);
    const inviaForm = {
      numPecDaInviare: this.form.controls.numPecDaInviare.value, 
      numPecSel: this.form.controls.numPecSel.value
    };
    this.inviaPec(inviaForm)
  }


  inviaPec(inviaForm:Object) {
    this.avvocatoService.inviaPec(inviaForm).subscribe(
        data => {this.openDialog()},
        error => {this.openErrorDialog()}
    );
  }

  openDialog() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Succes';
    modalRef.componentInstance.msg = 'Invio Massivo terminato correttamente';
  }
  
  openErrorDialog() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Error';
    modalRef.componentInstance.msg = 'Errore invio massivo';
  }


}
 