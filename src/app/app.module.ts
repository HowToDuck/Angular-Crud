import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { ListEntryComponent } from './list-entry/list-entry.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEntryComponent,
    ListEntryComponent,
    EditEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
