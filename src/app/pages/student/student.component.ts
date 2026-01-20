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

  newStudentObj: StudentModel = new StudentModel();

  studentsrv = inject(StudentServiceService);

  studentsList: StudentModel[] = [];            // Original API data
  filteredStudentsList: StudentModel[] = [];   // Filtered data (used in UI)

  searchText: string = '';                      // 🔍 Search input

  viewMode: 'card' | 'table' = 'card';

  page: number = 1;
  pageSize: number = 10;

  studentForm: FormGroup;

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

  ngOnInit(): void {
    this.loadStudents();
  }

  // ============================
  // LOAD STUDENTS FROM API
  // ============================
  loadStudents() {
    this.studentsrv.getAllStudent().subscribe({
      next: (result: IAPIResponse) => {
        this.studentsList = result.data;
        this.filteredStudentsList = result.data; // 🔑 Important
      }
    });
  }

  // ============================
  // SEARCH FUNCTIONALITY
  // ============================
  onSearch(): void {
    const value = this.searchText.toLowerCase().trim();

    if (!value) {
      this.filteredStudentsList = this.studentsList;
      return;
    }

    this.filteredStudentsList = this.studentsList.filter(student =>
      student.fullName?.toLowerCase().includes(value) ||
      student.email?.toLowerCase().includes(value) ||
      student.mobileNumber?.toString().includes(value) 
    );
  }

  // ============================
  // CREATE STUDENT
  // ============================
  submitStudent() {
    this.studentsrv.createNewStudent(this.newStudentObj).subscribe({
      next: (result: IAPIResponse) => {
        if (result.result) {
          alert("Student Created Successfully!");
          this.closeModal();
          this.loadStudents(); // refresh list
        }
      },
      error: (error) => {
        alert("Api Error " + error.error.message);
      }
    });
  }

  // ============================
  // DELETE STUDENT
  // ============================
  delete(batchId: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentsrv.deleteStudent(batchId).subscribe(res => {
        if (res.result) {
          this.loadStudents();
        }
      });
    }
  }

  // ============================
  // VIEW TOGGLE
  // ============================
  toggleView(mode: 'table' | 'card') {
    this.viewMode = mode;
  }

  // ============================
  // MODAL HANDLING
  // ============================
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  // ============================
  // UTILS
  // ============================
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

