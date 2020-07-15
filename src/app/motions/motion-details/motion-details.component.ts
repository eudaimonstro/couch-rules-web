import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap, take } from 'rxjs/operators';
import { MotionModel } from '../../shared/models/motion';
import { MotionService } from '../services/motion.service';
import * as fromMotion from '../store/motion.reducer';
import * as MotionActions from '../store/motion.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-motion-detail',
  templateUrl: './motion-details.component.html',
  styleUrls: ['./motion-details.component.scss'],
})
export class MotionDetailsComponent implements OnInit {
  public selectedMotion$: Observable<MotionModel>;

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private motionService: MotionService
  ) {}

  public ngOnInit(): void {
    this.selectedMotion$ = this.route.paramMap.pipe(
      take(1),
      switchMap((params: ParamMap) =>
        this.motionService.getMotionById(params.get('id'))
      )
    );
  }

  public saveHandler(motion: MotionModel): void {
    this.motionService
      .updateMotion(motion.id, motion)
      .pipe(take(1))
      .subscribe(() => {
        this.snackBar.open('Motion saved successfully', 'Dismiss', {
          duration: 2000,
        });
      });
  }
}
