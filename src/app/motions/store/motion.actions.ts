import { createAction, union, props } from '@ngrx/store';
import { MotionModel } from '../../shared/models/motion';

export enum MotionActionType {
  AddMotion = '[Motion] Add Motion',
  RemoveMotion = '[Motion] Remove Motion',
  UpdateMotion = '[Motion] Update Motion',
  SelectMotion = '[Motion] Select Motion',
  SetMotions = '[Motion] Set Motions',
  ServerAddMotion = '[Motion] Server Add Motion',
  ServerUpdateMotion = '[Motion] Server Update Motion',
  ServerRemoveMotion = '[Motion] Server Remove Motion',
}

export const addMotion = createAction(
  '[Motion] Add Motion',
  props<{ motion: MotionModel }>()
);

export const removeMotion = createAction(
  '[Motion] Remove Motion',
  props<{ id: string }>()
);

export const updateMotion = createAction(
  '[Motion] Update Motion',
  props<{ motion: MotionModel }>()
);

export const selectMotion = createAction(
  '[Motion] Select Motion',
  props<{ motion: MotionModel }>()
);

export const setMotions = createAction(
  '[Motion] Set Motions',
  props<{ motions: MotionModel[] }>()
);

export const serverAddMotion = createAction(
  '[Motion] Server Add Motion',
  props<{ motion: MotionModel }>()
);

export const serverRemoveMotion = createAction(
  '[Motion] Server Remove Motion',
  props<{ id: string }>()
);

export const serverUpdateMotion = createAction(
  '[Motion] Server Update Motion',
  props<{ motion: MotionModel }>()
);

const actions = union({
  addMotion,
  removeMotion,
  updateMotion,
  selectMotion,
  setMotions,
  serverAddMotion,
  serverRemoveMotion,
  serverUpdateMotion,
});

export type MotionActionsUnion = typeof actions;
