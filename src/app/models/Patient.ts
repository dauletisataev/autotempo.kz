import {Treatment} from './Treatment';
export class Patient{
  fName: String;
  lName: String;
  pName: String;
  name: String;
  progress: number;
  birthDate: String;
  iin: String;
  phone: String;
  sex: String;
  constructor(){
    this.fName= '';
    this.lName= '';
    this.pName= '';
    this.progress= 0;
    this.birthDate= '';
    this.iin= '';
    this.phone= '';
    this.sex = '';
  }
}
