import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public userName: any;
  public password: any;
  // userDetails: {
  //   userName: " ",
  //   password: " "
  // };

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  login() {
    const user = {
      userName: 'admin',
      password: 'Test1234',
    };
    if (user.userName === this.userName && user.password === this.password) {
      alert('success');
      this.router.navigateByUrl('dashboard');
    } else {
      alert('incorrect details');
    }
  }
}
