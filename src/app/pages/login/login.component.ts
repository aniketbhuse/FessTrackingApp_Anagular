import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent {

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
        localStorage.setItem('batchuser', JSON.stringify(res.data));
        this.router.navigateByUrl('dashboard');
      },
      error: (err => {
        debugger;
        alert("Error from API");
      })
    });
  }
}



