import { Enterprise } from "./enterprise";

export class Department{
  id!:String;
  description!:String;
  createdBy!:String;
  createdDate!:Date;
  modifiedBy!:String;
  modifiedDate!:Date;
  name!:String;
  phone!:Number;
  status!:boolean;
  enterprise!: Enterprise;
}
