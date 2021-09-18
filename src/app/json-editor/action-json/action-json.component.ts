import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionEnum } from '../enum/action.enum';
import { JSONActionService } from '../services/jsonaction.service';

@Component({
  selector: 'app-action-json',
  templateUrl: './action-json.component.html',
  styleUrls: ['./action-json.component.scss']
})
export class ActionJsonComponent implements OnInit {

  constructor(private actionService: JSONActionService) { }

  ngOnInit(): void {
  }

  putOnOneLine() {
    this.actionService.updateAction(ActionEnum.OneLine);
  }

  indent() {
    this.actionService.updateAction(ActionEnum.Indent);
  }

}
