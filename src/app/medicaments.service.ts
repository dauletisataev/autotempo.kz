import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Medicament } from './models/Medicament';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import * as firebase from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class MedicamentsService {
  /**
   * @type {Observable<Medicament>} med
   * @type {AngularFirestoreCollection<Book>} medsCollection
   */
  medicament: Observable<Medicament | null>;
  medCollection: AngularFirestoreCollection<Medicament>;

  getAllMeds() {
    return this.medCollection = this.afs.collection('ATC-open', ref=>ref.orderBy("name").limit(20));
  }
  /**
   * @constructor MedicamentService
   * @param {AngularFirestore} afs
   */
  constructor(private afs: AngularFirestore) {
    this.medCollection = this.afs.collection('ATC-open');
  }
  getMedStartAt(name: string) {
  return this.medCollection = this.afs.collection<Medicament>('ATC-open', ref => {
      return ref
        .orderBy("name")
        .startAt(name)
        .endAt(name+'\uf8ff')
        .limit(20);
    });
  }
}
