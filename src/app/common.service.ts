import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CommonType } from 'src/CommonType';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }
baseUrl="https://localhost:7044/api/CommonTypeReferences/";

GetRoles()
{
  return this._http.get<CommonType[]>(this.baseUrl+"Role");
}

GetDepartments()
{
  return this._http.get<CommonType[]>(this.baseUrl+"department");
}

GetFlight()
{
  return this._http.get<CommonType[]>(this.baseUrl+"flight");
}

GetMealType()
{
  return this._http.get<CommonType[]>(this.baseUrl+"mealType");
}

GetMealPreference()
{
  return this._http.get<CommonType[]>(this.baseUrl+"MealPreference");
}

GetCity()
{
  return this._http.get<CommonType[]>(this.baseUrl+"city");
}

GetProject()
{
  return this._http.get<CommonType[]>(this.baseUrl+"project");
}

// GetRoleById(id : number)
//    {
//      return this._http.get<CommonType>(this.baseUrl +'/'+ id)
//    }


}
