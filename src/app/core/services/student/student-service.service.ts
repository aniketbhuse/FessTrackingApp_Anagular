import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { StudentModel } from '../../model/classes/Student.Model';
import { Observable } from 'rxjs';
import { IAPIResponse } from '../../model/interfaces/batch.model';
import { environment } from '../../../../environments/environment.development';
import { ApiMethodsConstant } from '../../constant/Global.constant';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

 http = inject(HttpClient);

  createNewStudent(obj: StudentModel): Observable<IAPIResponse>{
    debugger;
    return this.http.post<IAPIResponse>(environment.apiUrl + ApiMethodsConstant.CANDIDATES, obj)
  }

  getAllStudent(): Observable<IAPIResponse>{
    return this.http.get<IAPIResponse>(environment.apiUrl + ApiMethodsConstant.CANDIDATES);
  }

  updateStudent(batchId: number, obj: StudentModel): Observable<IAPIResponse> {
  debugger;
  return this.http.put<IAPIResponse>(
    `${environment.apiUrl}${ApiMethodsConstant.CANDIDATES}/${batchId}`,
    obj
  );
  }

  deleteStudent(batchId: number): Observable<IAPIResponse> {
    return this.http.delete<IAPIResponse>(
      `${environment.apiUrl}${ApiMethodsConstant.CANDIDATES}/${batchId}`
    );
  }
}
