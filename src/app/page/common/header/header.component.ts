import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { Funzione } from 'src/app/entity/user';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentUser!: User;

  funzioni!:Funzione[] | null;
  
  constructor(private router: Router, private authenticationService: AuthenticationService) { 
    console.log('Sono Nel costruttore del Header');
    
  }

  ngOnInit(): void {
    console.log('Sono Nel ngOnInit del Header');
    var retrievedObject = sessionStorage.getItem('currentUser');
    if (retrievedObject!= null) {
      console.log('retrievedObject: ', JSON.parse(retrievedObject));
      this.currentUser = JSON.parse(retrievedObject)
      this.funzioni = this.currentUser.listFunzioni;
      
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate([''])
  }

}
