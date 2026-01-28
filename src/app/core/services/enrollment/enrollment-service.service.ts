import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EnrollmentModel } from '../../model/classes/Enrollment';
import { Observable } from 'rxjs';
import { IAPIResponse } from '../../model/interfaces/batch.model';
import { ApiMethodsConstant } from '../../constant/Global.constant';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentServiceService {

  http = inject(HttpClient);

  createEnrollment(obj: EnrollmentModel): Observable<IAPIResponse> {
    return this.http.post<IAPIResponse>(
      environment.apiUrl + ApiMethodsConstant.ENROLLMENTS,
      obj
    );
  }

  getAllEnrollments(): Observable<IAPIResponse> {
    debugger;
    return this.http.get<IAPIResponse>(
      environment.apiUrl + ApiMethodsConstant.ENROLLMENTS
    );
  }

  updateEnrollment(enrollmentId: number, obj: EnrollmentModel): Observable<IAPIResponse> {
    return this.http.put<IAPIResponse>(
      `${environment.apiUrl}${ApiMethodsConstant.ENROLLMENTS}/${enrollmentId}`,
      obj
    );
  }

  deleteEnrollment(enrollmentId: number): Observable<IAPIResponse> {
    return this.http.delete<IAPIResponse>(
      `${environment.apiUrl}${ApiMethodsConstant.ENROLLMENTS}/${enrollmentId}`
    );
  }
}
