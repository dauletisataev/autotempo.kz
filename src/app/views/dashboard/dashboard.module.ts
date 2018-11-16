import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { OverviewGraphComponent } from './overview-graph/overview-graph.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { MedicationGaugeComponent } from './medication-gauge/medication-gauge.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { MedicamentsService } from '../../medicaments.service';
import { PatientsService } from '../../patients.service';
import { SpinnerComponent } from './spinner/spinner.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { AddPatientComponent } from './add-patient/add-patient.component';

import { TextMaskModule } from 'angular2-text-mask';
import { MedicamentsTrackingComponent } from './medicaments-tracking/medicaments-tracking.component';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    NgbModule,
    CommonModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    NgSelectModule,
    TextMaskModule
  ],
  providers: [MedicamentsService, PatientsService],
  declarations: [
    DashboardComponent,
    PatientsListComponent,
    OverviewGraphComponent,
    PatientInfoComponent,
    MedicationGaugeComponent,
    SpinnerComponent,
    AddPatientComponent,
    MedicamentsTrackingComponent
  ]
})
export class DashboardModule { }
