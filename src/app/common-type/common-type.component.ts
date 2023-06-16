import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { CommonType } from 'src/CommonType';


@Component({
  selector: 'app-common-type',
  templateUrl: './common-type.component.html',
  styleUrls: ['./common-type.component.css']
})
export class CommonTypeComponent implements OnInit{

  constructor(private _commonService : CommonService)
  {}
  roles: CommonType[] = [];
  departments: CommonType[]=[];
  projects: CommonType[]=[];
  flights: CommonType[]=[];
  mealTypes: CommonType[]=[];
  mealPreferences: CommonType[]=[];
  cities:CommonType[]=[];

  ngOnInit(): void {

    //for Roles 
     this._commonService.GetRoles().subscribe(res=>
       {
       console.log(res)
       this.roles= res;
       console.log("Roles " + this.roles)
       console.log("checking");
      // console.log(this.roles[1]);
     });

     //for Departments
     this._commonService.GetDepartments().subscribe(res=>
       {
       console.log(res)
       this.roles= res;
       console.log("Departments" + this.departments)
     });

//for meal type
this._commonService.GetMealType().subscribe(res=>
  {
  console.log(res)
  this.roles= res;
  console.log("Meal Type" + this.mealTypes)
});

//for meal preference
this._commonService.GetMealPreference().subscribe(res=>
  {
  console.log(res)
  this.roles= res;
  console.log("Meal Preference" + this.mealPreferences)
});


//for flight

this._commonService.GetFlight().subscribe(res=>
  {
  console.log(res)
  this.flights= res;
  console.log("Flight type" + this.flights)
});

//for city

this._commonService.GetCity().subscribe(res=>
  {
  console.log(res)
  this.cities= res;
  console.log("City" + this.cities)
});

this._commonService.GetProject().subscribe(res=>
  {
  console.log(res)
  this.projects= res;
  console.log("Project" + this.projects)
});







     //this.GetRoleByid();
    // this.AddProduct();
      
     }
  //    product: CommonType | undefined;
  //    GetRoleByid()
  //    {
  //      this._commonService.GetRoleById(1).subscribe(res=>
  //        {
  //        console.log(res)
  //        this.product= res;
  //        console.log(this.product)
  //      });  
  // }

}
