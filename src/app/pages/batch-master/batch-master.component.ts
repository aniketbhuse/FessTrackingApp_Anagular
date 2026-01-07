
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { Batch } from '../../core/model/interfaces/batch.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BatchModel } from '../../core/model/classes/Batch.Model';
import { BatchServiceService } from '../../core/services/batch/batch-service.service';
import { IAPIResponse } from '../../core/model/interfaces/batch.model';



@Component({
  selector: 'app-batch-master',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './batch-master.component.html',
  styleUrl: './batch-master.component.css'
})
export class BatchMasterComponent {

  newBatchObj: BatchModel = new BatchModel()
  batchsrv = inject(BatchServiceService);

  batchesList: BatchModel[] = [];
  viewMode: 'card' | 'table' = 'card';
  page: number = 1;
  pageSize: number = 10;
  batchForm: FormGroup;

  Math: any;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.batchForm = this.fb.group({
      batchName: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      isActive: [true]
    });
  }

  ngOnInit(): void {
    this.loadBatches();
  }

  loadBatches() {
    this.batchsrv.getAllBatch().subscribe({
      next: (result: IAPIResponse) => {
        this.batchesList = result.data
      }

    })
  }

  toggleView(mode: 'table' | 'card') {
    this.viewMode = mode;
  }

  submitBatch() {
    this.batchsrv.createNewBatch(this.newBatchObj).subscribe({
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
      this.batchsrv.deleteBatch(batchId).subscribe(res => {
        if (res.result) {
          this.loadBatches();
        }
      });
    }
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
