import { Component, inject, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = { name: '', email: '' };
  editingStudent: Student | null = null;

  private studentService = inject(StudentService);

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getAllStudents().subscribe({
      next: (res) => {
        console.log('Fetched students:', res.data.studentDTOS);
        this.students =  res.data.studentDTOS; // 👉 kalau backend return array langsung
        console.log('Students loaded:', this.students);
      },
      error: (err) => console.error(err),
    });
  }

  addStudent(): void {
    this.studentService.addStudent(this.newStudent).subscribe(() => {
      this.loadStudents();
      this.newStudent = { name: '', email: '' };
      console.log('Student added Succesfully: ' + this.students);
    });
  }

  editStudent(student: Student): void {
    this.editingStudent = { ...student };
  }

  updateStudent(): void {
    if (this.editingStudent && this.editingStudent.id) {
      this.studentService
        .updateStudent(this.editingStudent.id, this.editingStudent)
        .subscribe(() => {
          this.loadStudents();
          this.editingStudent = null;
        });
    }
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });
  }
}
