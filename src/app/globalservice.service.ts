import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  constructor(private http: HttpClient) { }
  getDepList():Observable<any[]>{
    return this.http.get<any>(environment.ApiUrl + 'department');
  }
  
  addDeparment(val:any):Observable<any[]>{
    return this.http.post<any>(environment.ApiUrl +'department',val);
  }
  
  updateDeparment(val:any):Observable<any[]>{
    return this.http.put<any>(environment.ApiUrl +'department',val);
  }
  
  deleteDeparment(val:any):Observable<any[]>{
    return this.http.delete<any>(environment.ApiUrl +'department/' + val);
  }
  
  getEmpList():Observable<any[]>{
    return this.http.get<any>(environment.ApiUrl +'employee');
  }
  
  addEmp(val:any):Observable<any[]>{
    return this.http.post<any>(environment.ApiUrl +'employee',val);
  }
  
  updateEmp(val:any):Observable<any[]>{
    return this.http.put<any>(environment.ApiUrl +'employee',val);
  }
  
  deleteEmp(val:any):Observable<any[]>{
    return this.http.delete<any>(environment.ApiUrl +'employee/' + val);
  }
  
  uploapPhoto(val:any):Observable<any[]>{
    return this.http.post<any>(environment.ApiUrl +'employee/savefile', val);
  }
  
  getAllDepartmentsNames():Observable<any[]>{
    return this.http.get<any>(environment.ApiUrl +'employee/GetAllDeparmentsName');
  }
  
}

