import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { fadeInOut } from 'src/app/_helper/animation';
import { WebHttpApiService } from 'src/app/_services/web-http-api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  animations:[fadeInOut]
})
export class CreateUserComponent implements OnInit,OnChanges {

  employeeId! : number;
  employeeData : any;
  edit :boolean = false;
  employeeDetailForm! : FormGroup;
  submitted = false;

  @Input() empData: any;
  @Output() onClick = new EventEmitter();

  constructor(private _activateRoute : ActivatedRoute,
    private _webHttp : WebHttpApiService,
    private fb : FormBuilder) {

      this.employeeDetailForm = this.fb.group({
        id : [''],
        employeeName : ['',Validators.required],
        employeeAge : ['',Validators.required],
        employeeSalary : ['',Validators.required]

      });

      if(this._activateRoute.snapshot.params?.id){
        this.employeeId = this._activateRoute.snapshot.params?.id;
        this.edit=true;
      }
   }
  ngOnChanges(): void {
    if(this.empData != undefined && this.empData != null){
      this.employeeDetailForm.get('id')?.setValue(this.empData?.id);
      this.employeeDetailForm.get('employeeName')?.setValue(this.empData?.employee_name);
      // this.employeesData=res;
      this.employeeDetailForm.get('employeeAge')?.setValue(this.empData?.employee_age);

      this.employeeDetailForm.get('employeeSalary')?.setValue(this.empData?.employee_salary);
      this.edit=true;
    }

  }

  ngOnInit(): void {
   
    if(this.edit && this.employeeId != null && this.employeeId != undefined){
      this.getEmployeeDetails();
      }
    
  }

  

  get f(){return this.employeeDetailForm.controls;}

  getEmployeeDetails(){
    this._webHttp.Get(this._webHttp.getEmployeeById+this.employeeId).subscribe(res=>{
      console.log(res);
      this.employeeData= res?.data;
      this.employeeDetailForm.get('employeeName')?.setValue(this.employeeData?.employee_name);
      // this.employeesData=res;
      this.employeeDetailForm.get('employeeAge')?.setValue(this.employeeData?.employee_age);

      this.employeeDetailForm.get('employeeSalary')?.setValue(this.employeeData?.employee_salary);


    },(err) => {
        console.error(err);
    });
    
  }
  addEmployee(){
    this.submitted = true;
    if(this.employeeDetailForm.invalid){
      return;
    }
    const json = 	{
      name:this.employeeDetailForm.get('employeeName')?.value,
      salary:this.employeeDetailForm.get('employeeSalary')?.value,
      age:this.employeeDetailForm.get('employeeAge')?.value
    }

    try{
      this._webHttp.Post(this._webHttp.createEmployee,json).subscribe(res=>{
        console.log(res);

      });

    }catch(e){
      console.log(e.message);
    }

  }
  updateEmployee(){
    const json : IUSer = 	{
      name :this.employeeDetailForm.get('employeeName')?.value,
      salary:this.employeeDetailForm.get('employeeSalary')?.value,
      age:this.employeeDetailForm.get('employeeAge')?.value
    }

    try{
      this._webHttp.Put(this._webHttp.updateEmployee+this.employeeId,json).subscribe(res=>{
        console.log(res);

      });

    }catch(e){

    }
  }

}
interface IUSer{
  name:string;
  salary:string;
  age:string;
}
