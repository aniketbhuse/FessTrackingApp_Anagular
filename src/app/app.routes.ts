import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BatchMasterComponent } from './pages/batch-master/batch-master.component';

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
        path:'admin',
        component: LayoutComponent,
        children:[
            {
                path:'batch',
                component: BatchMasterComponent
            },
            {
                path:'dashboard',
                component: DashboardComponent
            }
        ]
    }
];
