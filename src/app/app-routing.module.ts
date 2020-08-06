import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotionComponent } from './motions/motion/motion.component';
import { MotionDetailsComponent } from './motions/motion-details/motion-details.component';
import { MotionListComponent } from './motions/motion-list/motion-list.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'motion',
    component: MotionComponent,
    data: { title: 'Motion' }
  },
  {
    path: 'motion-detail',
    component: MotionDetailsComponent,
    data: { title: 'Motion Details' }
  },
  {
    path: 'motion-list',
    component: MotionListComponent,
    data: { title: 'Motion List' }
  },
  {
    path: 'account',
    children: [{
      path: 'create',
      component: CreateAccountComponent
    }]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
