import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { MainComponent } from './main/main.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'list',
    loadChildren: 'app/list/list.module#ListModule'
  },
  {
    path: 'animations',
    loadChildren: 'app/animations/animations.module#AnimationsModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
