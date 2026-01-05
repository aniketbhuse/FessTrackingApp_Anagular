import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {

  passwordType: string = 'password';

  togglePassword() {
    this.passwordType =
      this.passwordType === 'password' ? 'text' : 'password';
  }


  loginObj: any = {
    email: "",
    password: ""
  }

  http = inject(HttpClient);
  router = inject(Router);

  // https://feestracking.freeprojectapi.com/api/BatchUser/login

  onLogin() {
    debugger;
    this.http.post("https://feestracking.freeprojectapi.com/api/BatchUser/login", this.loginObj).subscribe({
      next: (res: any) => {
        debugger;
        localStorage.setItem(GlobalConstant.LOCAL_KEY_LOGIN, JSON.stringify(res.data));
        this.router.navigateByUrl('dashboard');
      },
      error: (err => {
        debugger;
        alert("Error from API");
      })
    });
  }
}



