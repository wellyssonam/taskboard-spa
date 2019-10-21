import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { TaskRoutes } from './tasks';
import { Error404Component } from './shared';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks/list',
    pathMatch: 'full'
  },
  ...TaskRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
        this.router.navigate(['/']); // or redirect to default route
    };
  }
}
