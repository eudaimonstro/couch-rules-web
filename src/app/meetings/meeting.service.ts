import { Injectable } from '@angular/core';
import { Meeting } from './meeting';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private meetingsUrl = 'http://localhost:8080/api/meetings';

  constructor(private http: HttpClient) { }

  // get("/api/meetings")
  getMeetings(): Promise<void | Meeting[]> {
    return this.http.get(this.meetingsUrl)
      .toPromise()
      .then(response => response as Meeting[])
      .catch(this.handleError);
  }

  // post("/api/meetings")
  createMeeting(newMeeting: Meeting): Promise<void | Meeting> {
    return this.http.post(this.meetingsUrl, newMeeting)
      .toPromise()
      .then(response => response as Meeting)
      .catch(this.handleError);
  }

  // get("/api/meetings/:id") endpoint not used by Angular app
  getMeeting(getMeetingId: string): Promise<void | Meeting> {
    return this.http.get(this.meetingsUrl + '/' + getMeetingId)
      .toPromise()
      .then(response => response as Meeting)
      .catch(this.handleError);
  }

  // delete("/api/meetings/:id")
  deleteMeeting(delMeetingId: string): Promise<void | string> {
    return this.http.delete(this.meetingsUrl + '/' + delMeetingId)
      .toPromise()
      .then(response => response as string)
      .catch(this.handleError);
  }

  // put("/api/meetings/:id")
  updateMeeting(putMeeting: Meeting): Promise<void | Meeting> {
    const putUrl = this.meetingsUrl + '/' + putMeeting._id;
    return this.http.put(putUrl, putMeeting)
      .toPromise()
      .then(response => response as Meeting)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
