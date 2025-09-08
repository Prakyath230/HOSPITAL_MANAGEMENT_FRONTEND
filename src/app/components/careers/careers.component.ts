import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface Job {
  title: string;
  location: string;
  type: string;
  description: string;
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent {
  // List of jobs
  jobs: Job[] = [
    {
      title: 'Senior Cardiologist',
      location: 'Mumbai, India',
      type: 'Full-Time',
      description: 'Experienced cardiologist with at least 10 years of practice.'
    },
    {
      title: 'Nursing Staff',
      location: 'Delhi, India',
      type: 'Part-Time',
      description: 'Compassionate nurses needed for the emergency department.'
    }
  ];

  // The job currently selected for applying
  selectedJob: Job | null = null;

  // Open the modal
  apply(job: Job) {
    this.selectedJob = job;
  }

  // Close the modal
  closeModal() {
    this.selectedJob = null;
  }

  // Handle form submission
  submitApplication(form: NgForm) {
    if (form.valid) {
      console.log('Application Data:', form.value);
      alert('Application submitted successfully!');
      form.resetForm();
      this.closeModal();
    } else {
      alert('Please fill all required fields.');
    }
  }
}
