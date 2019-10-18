import { Routes, RouterModule } from '@angular/router';

import { ListTaskComponent } from './components/list';

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListTaskComponent
    }
];
