import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(

    private http: HttpClient,
    private router: Router,
  ) { }

  onLogin() {

    debugger;

    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj)
      .subscribe((res: any) => {

        if (res.result) {

          console.log('Login success');
          localStorage.setItem('loginToken', res.data.token);
          this.router.navigateByUrl('/dashboard');
        } else {

          console.error(res.message);
        }
      });
  };
}
