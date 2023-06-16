import { Component,NgModule,OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Request } from 'src/Request';
import { RequestService } from '../request.service';
import { subscribeOn } from 'rxjs';
import { CommonTypeComponent } from '../common-type/common-type.component';
import { CommonService } from '../common.service';
import { CommonType } from 'src/CommonType';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requests=new Request();
  TravelMode:CommonType[]=[];
  Flight : CommonType [] =[] ;
  Project: CommonType[]=[];
  Department: CommonType[]=[];
  MealType: CommonType [] =[];
  MealPreference: CommonType [] =[];
  City: CommonType[]=[];

  isChecked : boolean = false;
  checkFlight:boolean=false;
  checkHotel:boolean=false;

  isInternationalTravel: boolean = false;
  isDomesticTravel: boolean = false;
  projectField : boolean = false;
  departmentField: boolean=false;
  cityField:boolean=false;
  transportForm!:  FormGroup;

  constructor(private _reqformb: FormBuilder,private _requestService: RequestService,private _commonService: CommonService) {}  
  
  ngOnInit(): void {
    this.transportForm=this._reqformb.group({

      employeeId: new FormControl(null),
      firstName :new FormControl(null),
    middleName : new FormControl(null),
    lastName :new FormControl(null),
    projectField: new FormControl(null),
    departmentField:new FormControl(null),
    department : new FormControl(null),
    reasonForTravel: new FormControl(null),
    travelMode:new FormControl(null),
    passportNumber: new FormControl(null),
    aadharNumber: new FormControl(null),
    travelDateFrom: new FormControl(null),
    travelDateTill: new FormControl(null),
    stayingDate: new FormControl(null),
    stayingDays: new FormControl(null),
    passportFile: new FormControl(null),
    aadharFile:new FormControl(null),
    visaFile:new FormControl(null)

  }
    );


    //  this._requestService.GetRequests().subscribe(res=>
    //    {
    //    console.log(res)
    //    //this.requests= res;
    //    console.log(this.requests)
    //  });
     
    // this.buildForm();
    // this._commonService.GetDepartments();
    // this._commonService.GetRoles().subscribe(res=>
    //   {})

    //   console.log(this.isChecked);

      
   }

  
//   private buildForm():void {
//     this.transportForm=this._reqformb.group({

//       firstName :["",Validators.required],
//       //  new FormControl(null),
//     middleName : ["",Validators.required],
//     lastName : ["",Validators.required],
//     project : new FormControl(null),
//     department : new FormControl(null),
//     reasonForTravel: new FormControl(null),
//     stayingDate: new FormControl(null),
//     stayingDays: new FormControl(null),
//     passportFile: ["",Validators.required],

//   }
//     );

// }
checkTransportDetails()
    {
      console.log("checked transport details")
    this.checkFlight=true;
   // this.Flight = this._commonService.GetFlight();
   this._commonService.GetFlight().subscribe(res =>
     {
      console.log(res)
    
      this.Flight = res;
    } 
   );

    }

    onCityChange(event: Event): void{
      console.log("checked city record")
    this.cityField=true;
   this._commonService.GetCity().subscribe(res =>
     {
      console.log(res)
    
      this.City = res;
    } 
   );
    }
    onProjectChange() 
    {
      this.projectField = true;
      console.log("project")
      this._commonService.GetProject().subscribe(res =>
        {
         console.log(res)
       
         this.Project = res;
       } );
      
    }
    onDepartmentChange() 
    {
      this.departmentField = true;
      console.log("department")
      this._commonService.GetDepartments().subscribe(res =>
        {
         console.log(res)
       
         this.Department = res;
       } );
    }


    checkHotelMeal()
    {
      console.log("checked hotel details")
    this.checkHotel=true;
   this._commonService.GetMealPreference().subscribe(res =>
     {
      console.log(res)
    
      this.MealPreference = res;
    } 
   );

   console.log("checked meal type details")
   //this.checkHotel=true;
  this._commonService.GetMealType().subscribe(res =>
    {
     console.log(res)
   
     this.MealType = res;
   } 
  );
    }

    onTravelTypeChange(mySelect: any): void {

      if(mySelect == 14)
      {            
      this.isInternationalTravel = true;
      this.isDomesticTravel = false;          
      }

      else if(mySelect == 15)
      {
        this.isInternationalTravel = false;
      this.isDomesticTravel = true; 
      }
     else 
     {
      this.isInternationalTravel = false;
      this.isDomesticTravel = false; 
     }

    }

    
  selectedFile : any;
  onFileChange(event: any) {

    this.selectedFile = <File>event.target.files[0];

  }
Submit(data: any) {



}
}
