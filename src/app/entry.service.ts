import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Entry } from '../app/entry.model';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  constructor(private angularFirestore: AngularFirestore) {}

  getEntryDoc(id) {
    return this.angularFirestore
      .collection('entry-collection')
      .doc(id)
      .valueChanges();
  }

  getEntryList() {
    return this.angularFirestore
      .collection('entry-collection')
      .snapshotChanges();
  }

  createEntry(entry: Entry) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('entry-collection')
        .add(entry)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  deleteEntry(entry) {
    return this.angularFirestore
      .collection('user-collection')
      .doc(entry.id)
      .delete();
  }

  updateEntry(entry: Entry, id) {
    return this.angularFirestore.collection('user-collection').doc(id).update({
      name: entry.name,
      current: entry.current_ep,
      total: entry.total_ep,
      season: entry.season,
      rating: entry.rating,
      notes: entry.notes,
    });
  }
}
