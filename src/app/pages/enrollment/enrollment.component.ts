import { Component, inject, OnInit, signal } from '@angular/core';
import { IAPIResponse } from '../../core/model/interfaces/batch.model';
import { EnrollmentModel } from '../../core/model/classes/Enrollment';
import { EnrollmentServiceService } from '../../core/services/enrollment/enrollment-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';
import { BatchServiceService } from '../../core/services/batch/batch-service.service';
import { BatchModel } from '../../core/model/classes/Batch.Model';
import { map, Observable } from 'rxjs';
import { StudentModel } from '../../core/model/classes/Student.Model';
import { StudentServiceService } from '../../core/services/student/student-service.service';

@Component({
  selector: 'app-enrollment',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './enrollment.component.html',
  styleUrl: './enrollment.component.css'
})
export class EnrollmentComponent {

   enrollmentsrv = inject(EnrollmentServiceService);
   batchService = inject(BatchServiceService);
   studentservice = inject(StudentServiceService);



  batchData = signal<BatchModel[]>([]);
  studentList$: Observable<StudentModel[]> = new Observable<StudentModel[]>;

  newEnrollmentObj: EnrollmentModel = new EnrollmentModel();
  enrollmentsList: EnrollmentModel[] = [];
  filteredEnrollmentsList: EnrollmentModel[] = [];


  searchText: string = '';
  viewMode: 'card' | 'table' = 'card';

  page: number = 1;
  pageSize: number = 10;

  isModalOpen = false;

  constructor(){
    this.studentList$ = this.studentservice.getAllStudent().pipe(
      map((res:IAPIResponse)=> res.data)
    );
  }

  ngOnInit(): void {
    this.loadEnrollments();
    //this.getAllBatches();
  }

  // Get All Batches for dropdown
  getAllBatches(){
    this.batchService.getAllBatch().subscribe({
      next:(res:IAPIResponse)=>{
        this.batchData.set(res.data);
      }
    })
  }

  // ============================
  // LOAD ENROLLMENTS
  // ============================
  loadEnrollments() {
    debugger;
    this.enrollmentsrv.getAllEnrollments().subscribe({
      next: (res: IAPIResponse) => {
        debugger;
        this.enrollmentsList = res.data;
        this.filteredEnrollmentsList = res.data;
      }
    });
  }

  // ============================
  // SEARCH
  // ============================
  onSearch(): void {
    const value = this.searchText.toLowerCase().trim();

    if (!value) {
      this.filteredEnrollmentsList = this.enrollmentsList;
      return;
    }

    this.filteredEnrollmentsList = this.enrollmentsList.filter(e =>
      e.batchId?.toString().includes(value) ||
      e.candidateId?.toString().includes(value)
    );
  }

  // ============================
  // CREATE
  // ============================
  submitEnrollment() {
    this.enrollmentsrv.createEnrollment(this.newEnrollmentObj).subscribe({
      next: (res: IAPIResponse) => {
        if (res.result) {
          alert('Enrollment Created Successfully!');
          this.closeModal();
          this.loadEnrollments();
        }
      }
    });
  }

  // ============================
  // DELETE
  // ============================
  delete(enrollmentId: number) {
    if (confirm('Are you sure?')) {
      this.enrollmentsrv.deleteEnrollment(enrollmentId).subscribe(res => {
        if (res.result) {
          this.loadEnrollments();
        }
      });
    }
  }

  // ============================
  // VIEW
  // ============================
  toggleView(mode: 'table' | 'card') {
    this.viewMode = mode;
  }

  // ============================
  // MODAL
  // ============================
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
