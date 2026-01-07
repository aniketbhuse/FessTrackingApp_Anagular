import { Component, inject } from '@angular/core';
import { BatchModel } from '../../core/model/classes/Batch.Model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentModel } from '../../core/model/classes/Student.Model';
import { HttpClient } from '@angular/common/http';
import { StudentServiceService } from '../../core/services/student/student-service.service';
import { IAPIResponse } from '../../core/model/interfaces/batch.model';

@Component({
  selector: 'app-student',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  showPassword: boolean = false;

  togglePass(): void {
    this.showPassword = !this.showPassword;
  }


  newStudentObj: StudentModel = new StudentModel()

  studentsrv = inject(StudentServiceService);

  studentsList: StudentModel[] = [];
  viewMode: 'card' | 'table' = 'card';
  page: number = 1;
  pageSize: number = 10;
  studentForm: FormGroup;

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    debugger;
    this.studentsrv.getAllStudent().subscribe({
      next: (result: IAPIResponse) => {
        this.studentsList = result.data
      }

    })
  }

  submitStudent() {
    this.studentsrv.createNewStudent(this.newStudentObj).subscribe({
      next: (result: IAPIResponse) => {
        
        if (result.result) {
          alert("Batch Created Sucessfully..!");
          this.closeModal();
        }
      },
      error: (error) => {
        alert("Api Error " + error.error.message)
      }

    })
  }

  delete(batchId: number) {
    if (confirm('Are you sure you want to delete this batch?')) {
      this.studentsrv.deleteStudent(batchId).subscribe(res => {
        if (res.result) {
          this.loadStudents();
        }
      });
    }
  }

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: [''],
      password: ['', Validators.required],
      role: ['', Validators.required],
      isActive: [true]
    });
  }


  


  toggleView(mode: 'table' | 'card') {
    this.viewMode = mode;
  }


  isModalOpen = false;
  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }


  formatDate(date: string | Date): string {
    return new Date(date).toLocaleDateString();
  }

  handleView(batchId: number): void {
    console.log('View', batchId);
  }

  handleEdit(batchId: number): void {
    console.log('Edit', batchId);
  }

  handleDelete(batchId: number): void {
    console.log('Delete', batchId);
  }
}
