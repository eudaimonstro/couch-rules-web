import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MotionModel } from '../../shared/models/motion';

@Injectable({
  providedIn: 'root',
})
export class MotionService {
  // TODO Replace with env variable
  serviceUrl = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient) {}

  public getMotions(): Observable<MotionModel[]> {
    return this.http.get<MotionModel[]>(`${this.serviceUrl}/motions`);
  }

  public getMotionById(motionId: string): Observable<MotionModel> {
    return this.http.get<MotionModel>(`${this.serviceUrl}/motions/${motionId}`);
  }

  public createMotion(motion: MotionModel): Observable<MotionModel> {
    return this.http.post<MotionModel>(`${this.serviceUrl}/motions`, motion);
  }

  public updateMotion(
    motionId: string,
    motion: MotionModel
  ): Observable<MotionModel> {
    return this.http.patch<MotionModel>(
      `${this.serviceUrl}/motions/${motionId}`,
      motion
    );
  }

  public deleteMotion(motionId: string): Observable<MotionModel> {
    return this.http.delete<MotionModel>(
      `${this.serviceUrl}/motions/${motionId}`
    );
  }
}
