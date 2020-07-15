import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { StoreModule } from '@ngrx/store';
import { meetingReducer } from './store/meeting.reducer';



@NgModule({
  declarations: [
    MeetingComponent,
    MeetingDetailsComponent,
    MeetingListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('meeting', meetingReducer)
  ]
})
export class MeetingsModule { }
