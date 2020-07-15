import { MotionModel } from '../shared/models/motion';

export class AgendaItem {
  id?: string;
  startTime: Date;
  endTime: Date;
  title: string;
  motions: MotionModel[];
}
