import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TodoResponseDTO } from '../../interfaces/dto/todo.dto';

const URL = 'https://dummyjson.com/todos';

@Injectable({ providedIn: 'root' })
export class TodosAPIService {
  httpClient = inject(HttpClient);

  getTodos() {
    return this.httpClient.get<TodoResponseDTO>(URL);
  }
}
