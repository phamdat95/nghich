import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './ibook';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly url = 'http://localhost:8081/books';
  constructor(private http: HttpClient) { }
  getList (count = -1): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url).pipe(
      map(data => data.filter((post, i) => i > count))
    );
  }
  updateList (book: IBook): Observable<IBook> {
    return this.http.patch<IBook>(`${this.url}/${book.id}`, book);
  }
  createBook (book: Partial<IBook>): Observable<IBook> {
    return this.http.post<IBook>(this.url, book);
  }
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
