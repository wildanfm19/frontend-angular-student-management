import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:8080/api/students';

  private http = inject(HttpClient);

  getAllStudents(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }

  addStudent(student : any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, student);
  }

  updateStudent(studentId: number , student: any): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${studentId}` , student);
  }

  deleteStudent(studentId: number): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${studentId}`);
  }

}
