import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  loginObj: any = {

    'EmailId': '',
    'Password': '',
  };

  constructor(private http: HttpClient) {

  }
}
