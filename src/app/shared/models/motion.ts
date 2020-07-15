import { Person } from '../../people/person';

export class MotionModel {
  constructor(
    public id: string = '',
    public text: string = '',
    public selected: boolean = false
  ) {}
}
