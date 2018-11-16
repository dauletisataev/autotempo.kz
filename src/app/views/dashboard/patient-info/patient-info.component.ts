import { Component, OnInit, Input } from '@angular/core';
import {Patient} from '../../../models/Patient';
@Component({
  selector: 'patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {
  @Input('selectedPatient')
  public selectedPatient:Patient;
  
  constructor() { }

  ngOnInit() {
  }

}
