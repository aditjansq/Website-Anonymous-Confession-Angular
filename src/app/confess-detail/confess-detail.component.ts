import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodosService } from '../services/todos.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './confess-detail.component.html',
  styleUrls: ['./confess-detail.component.css'],
  providers: [DatePipe]
})
export class TodoDetailComponent implements OnInit {
  todo: Todo | null = null;
  newCommentText: string = ''; // To bind new comment input
  errorMessage: string = '';

  constructor(
    private todosService: TodosService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    const todoId = this.route.snapshot.paramMap.get('id');
    if (todoId) {
      this.loadTodoDetail(todoId);
    }
  }

  loadTodoDetail(id: string): void {
    this.todosService.getTodoById(id).subscribe(
      (todo) => {
        this.todo = todo;
      },
      (error) => {
        console.error('Error loading todo detail:', error);
        this.errorMessage = 'Gagal memuat detail Todo. Silakan coba lagi nanti.';
      }
    );
  }

  addComment(todoId: string): void {
    if (!this.newCommentText.trim()) {
      alert('Komentar tidak boleh kosong');
      return;
    }

    this.todosService.addComment(todoId, this.newCommentText).subscribe(
      (updatedTodo) => {
        this.todo = updatedTodo; // Update the todo with the new comment
        this.newCommentText = ''; // Clear the textarea after submitting
      },
      (error) => {
        console.error('Error adding comment:', error);
        this.errorMessage = 'Gagal menambahkan komentar. Silakan coba lagi nanti.';
      }
    );
  }
}
