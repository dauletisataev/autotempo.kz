import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Patient} from '../../../models/Patient';
import { Observable } from 'rxjs/Observable';
import { PatientsService } from '../../../patients.service';
import {Router} from '@angular/router';
@Component({
  selector: 'patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {
  patients: Observable<Patient[]>;
  medsList = [];
  $events = null; 
  @Input('ngModel')
  search_name: any
  @Output() public sendPatient = new EventEmitter();
  showSpinner:boolean = true;
  constructor(private patientService: PatientsService) {
    this.patients = this.patientService.getAllPatients().valueChanges();
    this.patients.subscribe(this.onCompleteObserver);
  }
  searchPatient(event) {
    this.showSpinner = true;
    console.log(event);
    console.log("searching for: ", this.search_name);
    this.patients = this.patientService.getPatientsByName(this.search_name).valueChanges();
    this.patients.subscribe(this.onCompleteObserver);

  }
  onCompleteObserver:any = {
    next: x => {
      console.log('Observer got a next value: %j');
      console.log(x);
      this.showSpinner = false;
    },
    error: err => {
      console.error('Observer got an error: %j' + err);
      this.showSpinner = false;
    },
    complete: () => {
      this.showSpinner = false;
      console.log('Observer got a complete notification');
    }
  };
  onPatientSelected(patient){
    console.log("onClick triggered", patient);
    this.sendPatient.emit(patient);
  }
  ngOnInit() {
  }

}
