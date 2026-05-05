import { Component, HostListener } from '@angular/core';
import { Course, COURSES } from '../../core/model/classes/courses';
import { Testimonial, TESTIMONIALS } from '../../core/model/classes/testimonials';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   courses: Course[] = COURSES;
  
    currentIndex = 0;
    cardsPerView = 3;
  
    ngOnInit(): void {
      this.updateCardsPerView();
    }
  
    @HostListener('window:resize')
    onResize(): void {
      this.updateCardsPerView();
    }
  
    private updateCardsPerView(): void {
      const width = window.innerWidth;
  
      if (width < 640) {
        this.cardsPerView = 1; // mobile
      } else if (width < 1024) {
        this.cardsPerView = 2; // tablet
      } else {
        this.cardsPerView = 3; // desktop
      }
  
      // Prevent overflow index
      if (this.currentIndex > this.maxIndex) {
        this.currentIndex = this.maxIndex;
      }
    }
  
    get maxIndex(): number {
      return Math.max(this.courses.length - this.cardsPerView, 0);
    }
  
    nextSlide(): void {
      this.currentIndex =
        this.currentIndex >= this.maxIndex ? 0 : this.currentIndex + 1;
    }
  
    prevSlide(): void {
      this.currentIndex =
        this.currentIndex <= 0 ? this.maxIndex : this.currentIndex - 1;
    }
  
    goToSlide(index: number): void {
      this.currentIndex = index;
    }
  
    get translateX(): string {
      return `translateX(-${this.currentIndex * (100 / this.cardsPerView)}%)`;
    }
  
    // Why to Choose Section Start 
  
    benefits: Benefit[] = [
      {
        icon: 'users',
        title: 'One-on-One Attention',
        description: 'Get personalized instruction tailored to your learning pace and goals',
      },
      {
        icon: 'clock',
        title: 'Flexible Scheduling',
        description: 'Choose class times that fit your busy schedule with 24/7 availability',
      },
      {
        icon: 'award',
        title: 'Expert Instructors',
        description: 'Learn from industry professionals with years of real-world experience',
      },
      {
        icon: 'headphones',
        title: 'Dedicated Support',
        description: 'Access to mentors and support team throughout your learning journey',
      },
      {
        icon: 'book',
        title: 'Custom Curriculum',
        description: 'Course content adapted to your skill level and career objectives',
      },
      {
        icon: 'trending',
        title: 'Career Growth',
        description: 'Job placement assistance and career counseling after course completion',
      },
    ];
    
  
    // Testimonal section 
  
     testimonials: Testimonial[] = TESTIMONIALS;
     currentIndexTestimonial = 0;
  
    get currentTestimonial(): Testimonial {
      return this.testimonials[this. currentIndexTestimonial];
    }
  
    next(): void {
      this. currentIndexTestimonial =
        (this. currentIndexTestimonial + 1) % this.testimonials.length;
    }
  
    prev(): void {
      this. currentIndexTestimonial =
        (this. currentIndexTestimonial - 1 + this.testimonials.length) %
        this.testimonials.length;
    }
  
    goTo(index: number): void {
      this. currentIndexTestimonial = index;
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
