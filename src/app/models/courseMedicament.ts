export class CourseMed{
  amountPerDay: number;
  atc: String;
  name: String;
  days: number;
  dosage: number;
  form: String;
  method: String;
  periodicity: number;
  takeTimes: string[];
  used: number;
  takenCount: {};
  constructor() {
      this.amountPerDay= 0;
      this.atc= '';
      this.name= '';
      this.days= 0;
      this.dosage= 0;
      this.form= '';
      this.method= '';
      this.periodicity= 0;
      this.takeTimes= [];
      this.takenCount = {};
      this.used= 0;
    }
}
