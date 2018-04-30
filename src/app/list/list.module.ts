import { NgModule } from '@angular/core';

import { ListRouterModule } from './list-router.module';

import { ListComponent } from './list.component';


@NgModule({
  imports: [ ListRouterModule ],
  providers: [],
  declarations: [ ListComponent ],
  exports: []
})
export class ListModule { }
