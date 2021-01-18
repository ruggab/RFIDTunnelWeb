import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { Funzione } from 'src/app/entity/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentUser!: User;
  
  funzioni!:Funzione[] | null;
  constructor() { 
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

}
