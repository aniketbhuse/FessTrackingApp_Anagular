import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BatchMasterComponent } from './pages/batch-master/batch-master.component';
import { StudentComponent } from './pages/student/student.component';
import { authGuard } from './core/guard/auth.guard';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { HomeComponent } from './pages/home/home.component';
import { EnrollmentComponent } from './pages/enrollment/enrollment.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
     {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'create-account',
        component: CreateAccountComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [authGuard]
            },
            {
                path: 'batch',
                component: BatchMasterComponent,
                canActivate: [authGuard]
            },
            {
                path: 'student',
                component: StudentComponent,
                canActivate: [authGuard]
            },
            {
                path: 'enrollment',
                component: EnrollmentComponent,
                canActivate: [authGuard]
            }
        ]
    }
];
