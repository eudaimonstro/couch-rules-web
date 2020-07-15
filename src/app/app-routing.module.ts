import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotionComponent } from './motions/motion/motion.component';
import { MotionDetailsComponent } from './motions/motion-details/motion-details.component';
import { MotionListComponent } from './motions/motion-list/motion-list.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
