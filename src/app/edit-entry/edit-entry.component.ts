import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.scss'],
})
export class EditEntryComponent implements OnInit {
  public editForm: FormGroup;
  entryRef: any;

  constructor(
    public entryService: EntryService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      email: [''],
      contact: [''],
    });
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.entryService.getEntryDoc(id).subscribe((res) => {
      this.entryRef = res;
      this.editForm = this.formBuilder.group({
        name: [this.entryRef.name],
        current: [this.entryRef.current_ep],
        total: [this.entryRef.total_ep],
        season: [this.entryRef.season],
        rating: [this.entryRef.rating],
        notes: [this.entryRef.notes],
      });
    });
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');

    this.entryService.updateEntry(this.editForm.value, id);
    this.router.navigate(['list-entry']);
  }
}
