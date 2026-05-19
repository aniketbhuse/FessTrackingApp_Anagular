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
    this.http.post("https://feestracking.freeprojectapi.com/api/BatchUser/login", this.loginObj).subscribe({
      next: (res: any) => {
        localStorage.setItem(GlobalConstant.LOCAL_KEY_LOGIN, JSON.stringify(res.data));
        localStorage.setItem('batchToken', res.token);
        this.router.navigateByUrl('dashboard');
      },
      error: (err => {
        alert("Error from API");
      })
    });
  }
}



// Demo COde 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo COde 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

// Demo COde 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


// Demo code 



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}


import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}






import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}



import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}

import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { GlobalConstant } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem(GlobalConstant.LOCAL_KEY_LOGIN);
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.removeItem(GlobalConstant.LOCAL_KEY_LOGIN);
    this.router.navigateByUrl("login");
  }
}
