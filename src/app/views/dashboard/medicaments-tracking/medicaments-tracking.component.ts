import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from '../../../patients.service';
import {Patient} from '../../../models/Patient';
import {Treatment} from '../../../models/Treatment';
import {Medicament} from '../../../models/Medicament';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
@Component({
  selector: 'medicaments-tracking',
  templateUrl: './medicaments-tracking.component.html',
  styleUrls: ['./medicaments-tracking.component.scss']
})
export class MedicamentsTrackingComponent implements OnInit {
  patient$: Observable<Patient>;
  patient: Patient = new Patient();
  treatment$: Observable<Treatment[]>;
  treatments$: any;
  courseMeds$: any;
  meds: String[] = ["Аспирин", "Глицин", "Парафил", "Царафил", "Глицин", "Парафил", "Царафил", "Глицин", "Парафил", "Царафил", "Глицин", "Парафил", "Царафил", "Глицин", "Парафил", "Царафил"];

  constructor(private route: ActivatedRoute,
    private location: Location,
    private patientService: PatientsService) {}

    ngOnInit() {
      console.log("sdasdsa ");
      this.getPatient();
    }
    getPatient():void {
      const pId = this.route.snapshot.paramMap.get('id');
      console.log("ID: ", pId);
      this.patient$ = this.patientService.getPatientById(pId).valueChanges();
      //this.treatment$ =
      this.treatments$ = this.patientService.getTreatmentsById(pId).snapshotChanges().pipe(
      map(actions => actions.map(a => {    // THIS LINE IS SLIGHTLY DIFFERENT
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        this.getMeds(pId, id);
        return { id, ...data };
      }))
    );
    this.patient$.subscribe(
      x => {
        this.patient = x;
        console.log(x);
      }
    );
  }
  getMeds(pId, treatId){
    this.courseMeds$ = this.patientService.getMedicamentsById(pId, treatId).snapshotChanges().pipe(
      map(actions => actions.map(a => {    // THIS LINE IS SLIGHTLY DIFFERENT
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log(id, data);
        return { id, ...data };
      }))
    );
  }
  getColorRange(values){
    const length = Object.keys(values).length;
    let trueCount = 0;
    for(var i = 0; i<length; i++)
      if(values[Object.keys(values)[i]]) trueCount++;

    console.log(values, length, trueCount);
    if(trueCount <=  length/2) return "#f44336";
    if(trueCount ==  length) return "#00e676";
    return  "#ffac33";
  }

}
