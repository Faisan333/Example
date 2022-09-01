import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  loadStudent(){
    return this.httpClient.get(baseUrl+'load-students')
  }
  postData(studentDetails:any){
    return this.httpClient.post(baseUrl+'add-student',studentDetails)
    }
    deleteData(id:any){
      return this.httpClient.delete(baseUrl+'delete-student/'+id)
      }
}
