import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MotionSocketService } from '../services/motion-socket.service';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import * as fromMotion from '../store/motion.reducer';
import * as MotionActions from '../store/motion.actions';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  styleUrls: ['./motion.component.scss'],
})
export class MotionComponent implements OnInit {
  private motionCreated$: Observable<any>;
  private motionUpdated$: Observable<any>;
  private motionDeleted$: Observable<any>;
  private destroySubject$: Subject<void> = new Subject();

  constructor(
    private store: Store<fromMotion.MotionState>,
    private motionSocketService: MotionSocketService
  ) {
    this.motionCreated$ = this.motionSocketService.subscribeToMessage(
      'motion:created'
    );
    this.motionUpdated$ = this.motionSocketService.subscribeToMessage(
      'motion:updated'
    );
    this.motionDeleted$ = this.motionSocketService.subscribeToMessage(
      'motion:deleteded'
    );
  }

  public ngOnInit(): void {
    this.motionCreated$
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((payload) => {
        this.store.dispatch(MotionActions.addMotion(payload));
      });

    this.motionUpdated$
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((payload) => {
        this.store.dispatch(MotionActions.updateMotion(payload));
      });

    this.motionDeleted$
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((payload) => {
        this.store.dispatch(MotionActions.removeMotion(payload));
      });
  }
}
