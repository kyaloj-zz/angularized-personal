import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { BioModule } from './bio/bio.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'bio', component: BioComponent },
      { path: '', redirectTo: 'bio', pathMatch: 'full' },
      { path: '**', redirectTo: 'bio', pathMatch: 'full'}
    ]),
    BioModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
