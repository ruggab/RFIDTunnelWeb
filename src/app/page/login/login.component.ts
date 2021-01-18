
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../entity/user';

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
    

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {}

   
    loginForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });
    

    ngOnInit() {
        // redirect to home if already logged in
        
        //if (sessionStorage.getItem('currentUser') == null && sessionStorage.getItem('currentUser') == '{}') {
            // get return url from route parameters or default to '/'
          //  this.router.navigate(['home']);
    //    }
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
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
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}