import { Component, OnInit } from '@angular/core';
import {CourseMed} from '../../../models/courseMedicament';
import {Treatment} from '../../../models/Treatment';
import {Patient} from '../../../models/Patient';
import { MedicamentsService } from '../../../medicaments.service';
import { PatientsService } from '../../../patients.service';
import { Medicament } from '../../../models/Medicament';
import { Observable } from 'rxjs/Observable';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextMaskModule } from 'angular2-text-mask';
import { map } from 'rxjs/operators';
import  * as firebase from 'firebase';

@Component({
  selector: 'add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  public phoneMask = ['+', '7', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,  /\d/, /\d/, /\d/, /\d/];
  public dateMask = [/[0-3]/, /[1-9]/, '/',/[0-1]/, /\d/, '/', /[1-2]/, /\d/,  /\d/, /\d/];
  public timeMask = [/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/];
  public diets: String[] = ["1","1A","1Б","2","3","4","4Б","4В","5","5А","5П","6","7","7А","7Б","7В","8","9","10","10А","10И","10С", "11" ,"12","13","14","15"];

  selectedMed = '';
  medTime = '';
  takeTimes = [];
  takeInTypes = [
    {name: "Пероральный",    type:"Энтеральные пути" },
    {name: "Сублингвальный", type:"Энтеральные пути" },
    {name: "Суббукальний",   type:"Энтеральные пути" },
    {name: "Ректальным",     type:"Энтеральные пути" },
    {name: "Ингаляционно"  , type: "Парентеральные пути"},
    {name: "Спейсеры", type: "Парентеральные пути"},
    {name: "Небулайзеры", type: "Парентеральные пути"},
    {name: "Трансдермально", type: "Парентеральные пути"},
    {name: "внутримышечно" , type: "Парентеральные пути"},
    {name: "Внутривенно", type: "Парентеральные пути"},
    {name: "Небулайзеры", type: "Парентеральные пути"},
    {name: "Трансдермально", type: "Парентеральные пути"},
    {name: "внутримышечно" , type: "Парентеральные пути"},
    {name: "Внутривенно", type: "Парентеральные пути"}];
  selectGroupBy = (item) => item.type;
  public sexSelect = "0";
  public dietSelect = "0";
  public formSelect = "0";
  public sexValue = "";
  public dietValue = "";
  public courseMeds: CourseMed[] = [new CourseMed()];
  treatment: Treatment = new Treatment();
  patient: Patient = new Patient();
  meds$: Observable<Medicament[]>;
  public medNames: Medicament[];
  constructor(private medService: MedicamentsService, private patientService: PatientsService) {
    this.meds$ = this.medService.getMedStartAt("Х").valueChanges();
    this.meds$ .subscribe(
      x => this.medNames = x
    );
  }

  ngOnInit() {
  }

  addNewMed(){
    this.meds$ = this.medService.getMedStartAt("Х").valueChanges();
    this.meds$ .subscribe(
      x => this.medNames = x
    );
    this.courseMeds.push(new CourseMed());
  }
  deleteMed(med:CourseMed) {
      const index: number = this.courseMeds.indexOf(med);
      if (index !== -1) {
          this.courseMeds.splice(index, 1);
      }
  }
  addTimeTo(med: CourseMed){
    console.log(med.amountPerDay , med.takeTimes.length);
    if(med.amountPerDay <= med.takeTimes.length) return;
    if(med.takeTimes.indexOf(this.medTime) != -1) return;
    med.takeTimes.push(this.medTime);
  }
  deleteTime(med: CourseMed, time:string) {
      const index: number = med.takeTimes.indexOf(time);
      if (index !== -1) {
          med.takeTimes.splice(index, 1);
      }
  }
  dietSelectChanged(val){
    console.log(val);
    this.treatment.table = val;
  }
  sexSelectChanged(val){
    console.log(val);
    this.patient.sex = val;
  }
  formSelectChanged(med, val){
    console.log(val);
    med.form = val;
  }
  medSelectChanged(med, id){
    console.log(id);
    const name = this.medNames.find(x => x.id === id).name;
    console.log(name);
    med.name = name;
    med.atc = id;
  }
  savePatient(){
      this.patient.fName = this.patient.fName.toLowerCase();
      this.patient.lName = this.patient.lName.toLowerCase();
      this.patient.pName = this.patient.pName.toLowerCase();
      //console.log(this.patient);
      //console.log(this.treatment);
      console.log(this.courseMeds);

      this.courseMeds.forEach(function(med){
          let timeCount = med.takeTimes.length;
          console.log("timecount ", timeCount, med.amountPerDay );
          for(var j =0; j < med.days; j++ ){
            var dayTimes = {};
            for(let time of med.takeTimes){
              dayTimes[time] = false;
            }
            console.log("j : ", j);
            med.takenCount[j] = dayTimes;
          }
      });
      //const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      let time = new Date(Date.now());
      this.patient.name =  this.patient.fName.replace(/^./, str => str.toUpperCase()) + " "+this.patient.lName.replace(/^./, str => str.toUpperCase())+" "+this.patient.pName.replace(/^./, str => str.toUpperCase());
      this.treatment.activationDate = time;//firebase.firestore.FieldValue.serverTimestamp();
      //console.log("timestamp: ", this.treatment.activationDate,  firebase.firestore.FieldValue.serverTimestamp());
      this.patientService.savePatient(this.patient, this.treatment, this.courseMeds);
  }

}
