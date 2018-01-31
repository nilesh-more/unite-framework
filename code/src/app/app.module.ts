import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { UniteModule } from './unite/unite.module';

const r : Routes = [
                {
                  path : "",
                  loadChildren : "./unitenew/unite.module#UniteModule",
                  data: {'basePath' : ''}
                }
              ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(r)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
