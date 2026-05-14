import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

// Demo Code



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


import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

// Demo Code



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
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

// Demo Code



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
