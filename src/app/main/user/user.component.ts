import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { fadeInOut ,EnterLeave} from 'src/app/_helper/animation';
import { WebHttpApiService } from 'src/app/_services/web-http-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [fadeInOut,EnterLeave]
  
})
export class UserComponent implements OnInit {

  employeesData :any;
  empDetail : any;
  searchText:any;



  constructor(private _webHttp : WebHttpApiService,
    private _router : Router) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }


  getEmployeeList(){
    this._webHttp.Get(this._webHttp.getEmployee).subscribe(res=>{
      this.employeesData=res?.data;
    },(err) => {
        console.error(err);
    });
    
  }

  getEmployeeDetail(data:any){
    this.empDetail = data;

    // this._router.navigateByUrl("user/create")
    // this._router.navigate(['user/create',{id:id}]);
  }

  updateEmployee(event : any){
    const json : IUSer = 	{
      name :event?.employeeName,
      salary:event?.employeeSalary,
      age:event?.employeeAge
    }

    try{
      this._webHttp.Put(this._webHttp.updateEmployee+event?.id,json).subscribe(res=>{
        console.log(res);

      });

    }catch(e){

    }
  }


  deleteEmployee(id : number){
    if (window.confirm('Are you sure, you want to delete?')){
      this._webHttp.Delete(this._webHttp.deleteEmployee+id).subscribe(data => {
        this.getEmployeeList();
      })
    }

  }

}

interface IUSer{
  name:string;
  salary:number;
  age:number;
}
interface Iresponce{
  status:string;
  data:Array<IUSer>;
  message:string;
}
