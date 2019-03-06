import { Component, OnInit } from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../book.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {
  bookList: IBook[];
  book: IBook;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getList().subscribe(next => this.bookList = next);
  }
  undone (i) {
    this.book = this.bookList[i];
    const data = {
      ...this.book,
      read: true
    };
    this.bookService.updateList(data).subscribe(() =>
      this.ngOnInit()
    );
  }
}
