import { Routes, RouterModule } from '@angular/router';

import { ListTaskComponent } from './components/list';
import { RegisterTaskComponent } from './components/register';

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListTaskComponent
    },
    {
        path: 'tasks/register',
        component: RegisterTaskComponent
    }
];
