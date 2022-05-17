import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateEntryComponent } from './create-entry/create-entry.component';
import { ListEntryComponent } from './list-entry/list-entry.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'create', component: CreateEntryComponent },
  { path: 'list-entries', component: ListEntryComponent },
  { path: 'update-entry/:id', component: EditEntryComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
