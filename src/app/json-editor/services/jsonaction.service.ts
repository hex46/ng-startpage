import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActionEnum } from '../enum/action.enum';

@Injectable({
  providedIn: 'root'
})
export class JSONActionService {

  private action: ActionEnum = ActionEnum.None;
  private actionObs$: BehaviorSubject<ActionEnum> = new BehaviorSubject(this.action);

  constructor() { }

  getActionObs(): Observable<ActionEnum> {
    return this.actionObs$.asObservable();
  }

  updateAction(newAction: ActionEnum) {
    this.actionObs$.next(newAction);
  }

}
