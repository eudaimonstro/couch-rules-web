import { Agenda } from '../agendas/agenda';
import { Organization } from '../organizations/organization';
import { Person } from '../people/person';

export class Meeting {
  _id?: string;
  organization: Organization;
  name: string;
  startTime: Date;
  endTime: Date;
  chair: Person;
  agenda: Agenda;
  selected: boolean;
}
