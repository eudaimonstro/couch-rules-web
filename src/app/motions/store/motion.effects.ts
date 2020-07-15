import { Injectable } from '@angular/core';
import { MotionActionType } from './motion.actions';
import { tap } from 'rxjs/operators';
import { Actions } from '@ngrx/store-devtools/src/reducer';

@Injectable()
export class MotionEffects {
  @Effect({ dispatch: false })
  public serverMotionAdd$ = this.actions$
    .pipe(
      ofType(MotionActionType.AddMotion),
      tap((payload) => console.log('Do something here as [AddMotion] effect', payload))
    );

  @Effect({ dispatch: false })
  public serverMotionUpdate$ = this.actions$
    .pipe(
      ofType(MotionActionType.UpdateMotion),
      tap((payload) => console.log('Do something here as [UpdateMotion] effect', payload))
    );

  @Effect({ dispatch: false })
  public serverMotionRemove$ = this.actions$
    .pipe(
      ofType(MotionActionType.RemoveMotion),
      tap((payload) => console.log('Do something here as [RemoveMotion] effect', payload))
    );

  constructor(
    private actions$: Actions
  ) { }
}