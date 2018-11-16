//import * as firebase from 'firebase'
export class Treatment{
  activationDate: any;
  icd10: String;
  isEnd: boolean;
  name: String;
  table: String;

  constructor(){
    this.activationDate= null;
    this.icd10= '';
    this.isEnd= false;
    this.name= '';
    this.table='';
  }
}
