import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Patient } from './models/Patient';
import { Treatment } from './models/Treatment';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patient: Observable<Patient | null>;
  patientCollection: AngularFirestoreCollection<Patient>;
  constructor(private afs: AngularFirestore) {
    this.patientCollection = this.afs.collection('patients');
  }
  getAllPatients() {
    return this.patientCollection = this.afs.collection('patients', ref=>ref.orderBy("name").limit(20));
  }
  getPatientsByName(name: string) {
  return this.patientCollection = this.afs.collection<Patient>('patients', ref => {
      return ref
        .orderBy("name")
        .startAt(name)
        .endAt(name+'\uf8ff')
        .limit(20);
    });
  }
  savePatient(patient, treatment, medicaments){
    //const id = this.patientCollection.createId();
    var batch = this.afs.firestore.batch();
    this.patientCollection.add(JSON.parse(JSON.stringify(patient))).then(ref=> {
      console.log("Your extra id field has been created:", ref.id);
      this.patientCollection.doc(ref.id).collection("treatments").add(JSON.parse(JSON.stringify(treatment)))
          .then(tref=> {
            console.log("Your extra id field has been created:", tref.id);
            const patCollection = this.patientCollection;
            const self = this;
            medicaments.forEach(function(med) {
              const newRef = patCollection.doc(ref.id).collection("treatments").doc(tref.id).collection("medicaments").doc(self.revisedRandId()).ref;
              batch.set(newRef, JSON.parse(JSON.stringify(med)));
            });
            batch.commit().then(function () {
                console.log("finished pushing");
            });
          });
      });
    //this.patientCollection.doc(id).collection("treatments").add(treat);
  }
  getPatientById(id ){
    return   this.patientCollection.doc<Patient>(id);

  }
  getTreatmentsById(id){
    return this.patientCollection.doc(id).collection("treatments");
  }
  getMedicamentsById(patId, treatId){
    return this.patientCollection.doc(patId).collection("treatments").doc(treatId).collection("medicaments");
  }

  revisedRandId() {
       return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
  }
}
