import { NgModule } from '@angular/core';

import {MdToolbarModule,MdSlideToggleModule} from '@angular/material';
@NgModule({
  imports: [
    MdToolbarModule,
    MdSlideToggleModule
  ],
  exports:[
    MdToolbarModule,
    MdSlideToggleModule
  ],
  declarations: []
})
export class AnimationsModule { }
