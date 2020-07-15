import { Action } from '@ngrx/store';
import { Meeting } from '../meeting';

export enum MeetingActionType {
  AddMeeting = '[Meeting] Add Meeting',
  RemoveMeeting = '[Meeting] Remove Meeting',
  UpdateMeeting = '[Meeting] Update Meeting',
  SelectMeeting = '[Meeting] Select Meeting',
  SetMeetings = '[Meeting] Set Meetings'
}

export class AddMeeting implements Action {
  readonly type = MeetingActionType.AddMeeting;
  constructor(public payload: Meeting) { }
}

export class RemoveMeeting implements Action {
  readonly type = MeetingActionType.RemoveMeeting;
  constructor(public payload: string) { }
}

export class UpdateMeeting implements Action {
  readonly type = MeetingActionType.UpdateMeeting;
  constructor(public payload: Meeting) { }
}

export class SelectMeeting implements Action {
  readonly type = MeetingActionType.SelectMeeting;
  constructor(public payload: Meeting) { }
}

export class SetMeetings implements Action {
  readonly type = MeetingActionType.SetMeetings;
  constructor(public payload: Meeting[]) { }
}

export type MeetingActions = AddMeeting | RemoveMeeting | UpdateMeeting | SelectMeeting | SetMeetings;
