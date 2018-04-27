import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ RouterModule ],
  providers: [],
  declarations: [ MainComponent, ListComponent ],
  exports: []
})
export class MainModule { }
