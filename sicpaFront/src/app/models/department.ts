import { Enterprise } from "./enterprise";

export class Department{
  id!:Number;
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
