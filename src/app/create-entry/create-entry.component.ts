import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.scss'],
})
export class CreateEntryComponent implements OnInit {
  public entryForm: FormGroup;

  constructor(
    public entryService: EntryService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.entryForm = this.formBuilder.group({
      name: [''],
      current: [''],
      total: [''],
      season: [''],
      rating: [''],
      notes: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.entryService.createEntry(this.entryForm.value);
    this.router.navigate(['list-entries']);
  }
}
