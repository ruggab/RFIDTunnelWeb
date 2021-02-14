
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../entity/user';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent} from '../common/modal/modal.component'
import {  HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
   
    //loginForm!: FormGroup;
    loading = false;
    submitted = false;
    returnUrl!: string;
    user!: User;
    error:any;

    constructor(
        public modalService: NgbModal,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

   
    loginForm = new FormGroup({
        usr: new FormControl('', [Validators.required]),
        psw: new FormControl('', [Validators.required])
    });
    

    ngOnInit() {
       
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;


        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.loginForm.value)
        .subscribe(
                data => {
                    console.log(data);
                    this.user = data;
                    console.log(this.user.id);
                    sessionStorage.setItem('currentUser', JSON.stringify(data));
                    this.router.navigate(['home']).then(() => {
                            window.location.reload();
                        });
                    
                },
                error => {
                    console.log(error);
                    this.loading = false;
                    this.error = error.error.message;
                   // this.openErrorDialog(error);
                });
    }



    openErrorDialog(error:HttpErrorResponse) {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.title = 'Error';
        modalRef.componentInstance.msg = error.message;
      }
}