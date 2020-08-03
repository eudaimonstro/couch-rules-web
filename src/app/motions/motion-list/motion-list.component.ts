import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { take, takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { MotionModel } from '../../shared/models/motion';
import { MotionService } from '../services/motion.service';
import * as fromMotion from '../store/motion.reducer';
import * as MotionActions from '../store/motion.actions';
import { Subject } from 'rxjs/internal/Subject';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-motion-list',
  templateUrl: './motion-list.component.html',
  styleUrls: ['./motion-list.component.scss'],
})
export class MotionListComponent implements OnInit, OnDestroy {
  @ViewChild('motionText') motionTextBox: ElementRef;
  private destroySubject$: Subject<void> = new Subject();
  public motions$: Observable<MotionModel[]>;
  public itemSelected = false;

  constructor(
    private store: Store<fromMotion.MotionState>,
    private snackBar: MatSnackBar,
    private router: Router,
    private motionService: MotionService
  ) {
    this.motions$ = store.pipe(select(fromMotion.getMotions)) as Observable<
      MotionModel[]
    >;
  }

  public ngOnInit(): void {
    this.motionService
      .getMotions()
      .pipe(take(1))
      .subscribe((motions: MotionModel[]) =>
        this.store.dispatch(MotionActions.setMotions({ motions }))
      );
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

  public addMotionHandler(motionName: string): void {
    const newMotion: MotionModel = new MotionModel(null, motionName);

    this.motionService
      .createMotion(newMotion)
      .pipe(takeUntil(this.destroySubject$))
      .subscribe();

    this.motionTextBox.nativeElement.value = '';
  }

  public itemSelectedHandler(motion: MotionModel): void {
    this.store.dispatch(MotionActions.selectMotion({ motion }));
  }

  public viewMotionHandler(): void {
    this.motions$.pipe(take(1)).subscribe((items: MotionModel[]) => {
      const selectedMotionIndex = items.findIndex(
        (motionItem) => motionItem.selected
      );
      this.router.navigate(['/motions/' + items[selectedMotionIndex].id]);
    });
  }

  public completeMotionHandler(): void {
    this.motions$.pipe(take(1)).subscribe((items: MotionModel[]) => {
      const itemToUpdateIndex = items.findIndex(
        (motionItem) => motionItem.selected
      );
      const itemToUpdate = items[itemToUpdateIndex];

      this.motionService
        .updateMotion(itemToUpdate.id, itemToUpdate)
        .pipe(takeUntil(this.destroySubject$))
        .subscribe(() => {
          this.snackBar.open('Motion completed', 'Dismiss', {
            duration: 2000,
          });
        });
    });
  }
}
