import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BatchMasterComponent } from './pages/batch-master/batch-master.component';
import { StudentComponent } from './pages/student/student.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path:'dashboard',
                component: DashboardComponent
            },
            {
                path:'batch',
                component: BatchMasterComponent
            },
            {
                path:'student',
                component: StudentComponent
            }
            
        ]
    }
];
