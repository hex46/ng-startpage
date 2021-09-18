import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonEditorRoutingModule } from './json-editor-routing.module';
import { EditorComponent } from './editor/editor.component';
import { InputJsonComponent } from './input-json/input-json.component';
import { OutputJsonComponent } from './output-json/output-json.component';
import { ActionJsonComponent } from './action-json/action-json.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditorComponent,
    InputJsonComponent,
    OutputJsonComponent,
    ActionJsonComponent
  ],
  imports: [
    CommonModule,
    JsonEditorRoutingModule,
    ReactiveFormsModule
  ]
})
export class JsonEditorModule { }
