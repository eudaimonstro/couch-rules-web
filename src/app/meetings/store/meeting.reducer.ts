import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { Meeting } from '../meeting';
import { MeetingActions, MeetingActionType } from './meeting.actions';

export interface MeetingState {
  meetings: Meeting[];
}

const initialState: MeetingState = {
  meetings: [],
};

export function meetingReducer(
  state = initialState,
  action: MeetingActions
): MeetingState {
  switch (action.type) {
    case MeetingActionType.AddMeeting: {
      const newMeeting = cloneDeep(action.payload);
      const updatedMeetings = cloneDeep(state.meetings);

      updatedMeetings.push(newMeeting);
      return {
        ...(state as MeetingState),
        meetings: updatedMeetings,
      };
    }
    case MeetingActionType.RemoveMeeting: {
      const currentMeetings = cloneDeep(state.meetings);
      const itemToRemoveIndex = currentMeetings.findIndex(
        (meetingItem) => meetingItem._id === action.payload
      );

      if (itemToRemoveIndex > -1) {
        currentMeetings.splice(itemToRemoveIndex, 1);
      }

      return {
        ...(state as MeetingState),
        meetings: currentMeetings,
      };
    }
    case MeetingActionType.UpdateMeeting: {
      const currentMeetings = cloneDeep(state.meetings);
      const meetingToUpdateIndex = currentMeetings.findIndex(
        (meeting: Meeting) => meeting._id === action.payload._id
      );
      currentMeetings[meetingToUpdateIndex] = cloneDeep(action.payload);

      return {
        ...(state as MeetingState),
        meetings: currentMeetings,
      };
    }
    case MeetingActionType.SelectMeeting: {
      const updatedMeetings = cloneDeep(state.meetings);
      updatedMeetings.map((meetingItem) => {
        meetingItem.selected = action.payload._id === meetingItem._id;
        return meetingItem;
      });

      return {
        ...(state as MeetingState),
        meetings: updatedMeetings,
      };
    }

    case MeetingActionType.SetMeetings: {
      return {
        ...(state as MeetingState),
        meetings: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export const getMeetingFeature = createFeatureSelector('meeting');

export const getMeetings = createSelector(
  getMeetingFeature,
  (state: MeetingState) => state.meetings
);
