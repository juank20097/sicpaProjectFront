import { Department } from "./department";
import { Employee } from "./employee";

export class DepartmentsEmployee{
  id!:String;
  createdBy!:String;
  createdDate!:Date;
  modifiedBy!:String;
  modifiedDate!:Date;
  status!:boolean;
  department!: Department;
  employee!: Employee
}
