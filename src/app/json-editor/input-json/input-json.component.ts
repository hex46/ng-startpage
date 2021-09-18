import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActionEnum } from '../enum/action.enum';
import { JSONActionService } from '../services/jsonaction.service';
import { jsonValidator } from '../validator/json.validator';

@Component({
  selector: 'app-input-json',
  templateUrl: './input-json.component.html',
  styleUrls: ['./input-json.component.scss']
})
export class InputJsonComponent implements OnInit {

  jsonTextareaFc: FormControl = new FormControl('{ "Kenobi": "Hello there!"} ', [Validators.required, Validators.minLength(2), jsonValidator()]);

  constructor(private actionService: JSONActionService) {
  }

  ngOnInit(): void {
    this.actionService.getActionObs().subscribe((action) => {
      switch(action) {
        case ActionEnum.Indent: {
          this.toIndentedJson(); break;
        }
        case ActionEnum.OneLine: {
          this.toOneLineJson(); break;
        }  
      }
    })
  }
   
  getJsonObject(): JSON { 
    const jsonvalue: string = this.jsonTextareaFc.value;
    return JSON.parse(jsonvalue);
  }

  toIndentedJson() {
    const jsonObject = this.getJsonObject();
    const newValue = JSON.stringify(jsonObject, null, 4);

    this.jsonTextareaFc.setValue(newValue);
  }

  toOneLineJson() {
    const jsonObject = this.getJsonObject();
    const newValue = JSON.stringify(jsonObject);

    this.jsonTextareaFc.setValue(newValue);
  }
}
