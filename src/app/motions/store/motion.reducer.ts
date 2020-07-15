import {
  createFeatureSelector,
  createSelector,
  createReducer,
  on,
  State,
  Action,
} from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { MotionModel } from '../../shared/models/motion';
import * as motionActions from './motion.actions';
import { MotionItemComponent } from '../motion-list/motion-item/motion-item.component';

export interface MotionState {
  motions: MotionModel[];
}

export const initialState: MotionState = {
  motions: [],
};

const motionReducer = createReducer(
  initialState,
  on(motionActions.addMotion, (state: MotionState, { motion }: any) => {
    const newMotion = cloneDeep(motion);
    const updatedMotions = cloneDeep(state.motions);

    updatedMotions.push(newMotion);
    return { ...(state as MotionState), motions: updatedMotions };
  }),
  on(motionActions.removeMotion, (state: MotionState, { id }: any) => {
    const currentMotions = cloneDeep(state.motions);
    const itemToRemoveIndex = currentMotions.findIndex(
      (motionItem: { id: string }) => motionItem.id === id
    );

    if (itemToRemoveIndex > -1) {
      currentMotions.splice(itemToRemoveIndex, 1);
    }
    return {
      ...(state as MotionState),
      motions: currentMotions,
    };
  }),
  on(motionActions.updateMotion, (state: MotionState, { motion }: any) => {
    const currentMotions = cloneDeep(state.motions);
    const motionToUpdateIndex = currentMotions.findIndex(
      (motion: MotionModel) => motion.id === motion.id
    );
    currentMotions[motionToUpdateIndex] = cloneDeep(motion);

    return {
      ...(state as MotionState),
      motions: currentMotions,
    };
  }),
  on(motionActions.selectMotion, (state: MotionState, { motion }: any) => {
    const updatedMotions = cloneDeep(state.motions);
    updatedMotions.map((motionItem: { selected: boolean; id: any }) => {
      motionItem.selected = motion.id === motionItem.id;
      return motionItem;
    });

    return {
      ...(state as MotionState),
      motions: updatedMotions,
    };
  }),
  on(motionActions.setMotions, (state, { motions }) => {
    return {
      ...(state as MotionState),
      motions,
    };
  })
);

export function reducer(state: MotionState | undefined, action: Action) {
  return motionReducer(state, action);
}

export const getMotionFeature = createFeatureSelector('motion');

export const getMotions = createSelector(
  getMotionFeature,
  (state: MotionState) => state.motions
);
