import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { MedicamentsTrackingComponent } from './medicaments-tracking/medicaments-tracking.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'add/patient',
    component: AddPatientComponent,
    data: {
      title: 'Новый Пациент'
    }
  },
  {
    path: 'patient/:id',
    component: MedicamentsTrackingComponent,
    data: {
      title: 'Пациент'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
