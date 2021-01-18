import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AvvocatoService } from "../../services/avvocato.service";
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from '../common/modal/modal.component'

@Component({
  selector: 'app-invia-mail',
  templateUrl: './invia-mail.component.html',
  styleUrls: ['./invia-mail.component.css']
})
export class InviaMailComponent implements OnInit {
  numMailList: any = ['10', '100', '1000']

  constructor(private avvocatoService: AvvocatoService, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.onload();
  }

  form = new FormGroup({
    numMailDaInviare: new FormControl('', [Validators.required]),
    numMailSel: new FormControl('', [Validators.required])
  });
  

  get f(){
    return this.form.controls;
  }

  changeNumMailSel(event:Event) {
    console.log(event.target);
  }

  onload() {
    this.avvocatoService.getNumMailDaInviare().subscribe(
      data => {
        this.form.setValue({numMailDaInviare: data, numMailSel:"10"});
        
        console.log(data);
      },
      error => console.log(error));
  }
  
  submit(){
    console.log(this.form.value);
    const inviaForm = {
      numMailDaInviare: this.form.controls.numMailDaInviare.value, 
      numMailSel: this.form.controls.numMailSel.value
    };
    this.inviaMail(inviaForm)
  }


  inviaMail(inviaForm:Object) {
    this.avvocatoService.inviaMail(inviaForm).subscribe(
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
 