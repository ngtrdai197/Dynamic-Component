import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  private closeEvent = new BehaviorSubject<any>(null);
  get close() {
    return this.closeEvent.asObservable();
  }
  constructor() { }

  _setEvent(status: boolean, reason?: any) {
    this.closeEvent.next({ status, reason });
  }
}
