import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotionListComponent } from './motion-list/motion-list.component';
import { MotionComponent } from './motion/motion.component';
import { MotionDetailsComponent } from './motion-details/motion-details.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/motion.reducer';
import { MotionItemComponent } from './motion-list/motion-item/motion-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MotionListComponent,
    MotionComponent,
    MotionDetailsComponent,
    MotionItemComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    FormsModule,
    StoreModule.forFeature('motion', reducer),
  ],
  exports: [
    MotionListComponent,
    MotionComponent,
    MotionDetailsComponent,
    MotionItemComponent,
  ],
})
export class MotionsModule {}
