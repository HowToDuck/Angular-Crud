import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { Entry } from '../entry.model';

@Component({
  selector: 'app-list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.scss'],
})
export class ListEntryComponent implements OnInit {
  Entries: Entry[];

  constructor(private entryService: EntryService) {}

  ngOnInit() {
    this.entryService.getEntryList().subscribe((res) => {
      this.Entries = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Entry),
        };
      });
    });
  }

  removeEntry = (entry) => this.entryService.deleteEntry(entry);
}
