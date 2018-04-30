import { NgModule } from '@angular/core';

import { AnimationsRouterModule } from './animations-router.module';

import { AnimationsComponent } from './animations.component';

@NgModule({
  imports: [ AnimationsRouterModule ],
  providers: [],
  declarations: [ AnimationsComponent ],
  exports: []
})
export class AnimationsModule { }
