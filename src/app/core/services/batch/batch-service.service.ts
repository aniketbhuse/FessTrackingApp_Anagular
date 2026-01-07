import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { ApiMethodsConstant } from '../../constant/Global.constant';
import { BatchModel } from '../../model/classes/Batch.Model';
import { Observable } from 'rxjs';
import { IAPIResponse } from '../../model/interfaces/batch.model';

@Injectable({
  providedIn: 'root'
})
export class BatchServiceService {

  http = inject(HttpClient);

  createNewBatch(obj: BatchModel): Observable<IAPIResponse>{
    debugger;
    return this.http.post<IAPIResponse>(environment.apiUrl + ApiMethodsConstant.BATCH, obj)
  }

  getAllBatch(): Observable<IAPIResponse>{
    return this.http.get<IAPIResponse>(environment.apiUrl + ApiMethodsConstant.BATCH);
  }

  updateBatch(batchId: number, obj: BatchModel): Observable<IAPIResponse> {
  debugger;
  return this.http.put<IAPIResponse>(
    `${environment.apiUrl}${ApiMethodsConstant.BATCH}/${batchId}`,
    obj
  );
  }

  deleteBatch(batchId: number): Observable<IAPIResponse> {
    return this.http.delete<IAPIResponse>(
      `${environment.apiUrl}${ApiMethodsConstant.BATCH}/${batchId}`
    );
  }



}
