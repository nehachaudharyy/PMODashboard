import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaticDashboardServiceService {

  constructor(private http: HttpClient) {  }

  getData(obj: any){
     console.log("In Service getData()");
     return this.http.post<any>('./api/user/staticDashboard', obj);
  }
}
