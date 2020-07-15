import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MotionSocketService extends Socket {
  constructor() {
    super({
      url: 'http://localhost:8988',
      options: { origin: '*', transport: ['websocket'] },
    });
  }

  public dispatch(messageType: string, payload: any): void {
    this.emit(messageType, payload);
  }

  public subscribeToMessage(messageType: string): Observable<any> {
    return this.fromEvent<any>(messageType);
  }
}
