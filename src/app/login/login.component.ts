import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  test : Date = new Date();
    focus;
    focus1;

    username = 'javainuse'
    password = ''
    invalidLogin = false

    constructor(private router: Router,
      private loginservice: AuthenticationService) { }
  
    ngOnInit() {
    }
    checkLogin() {
      if (this.loginservice.authenticate(this.username, this.password)
      ) {
        this.router.navigate(['/acceuil'])
        this.invalidLogin = false
      } else
        this.invalidLogin = true
    }  

}
