import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBooks } from '../pages/summary/interface/books';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<IBooks>('/assets/example.json');
  }
}

