import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IBook} from '../ibook';
import {Router} from '@angular/router';

@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrls: ['./undone.component.scss']
})
export class UndoneComponent implements OnInit {
  bookList: IBook[];
  form: FormGroup;
  book: IBook;
  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.bookService.getList().subscribe(next => this.bookList = next);
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      read: ['true']
    });
  }
  onSubmit() {
    if (this.form.valid) {
      const {value} = this.form;
      this.bookService.createBook(value).subscribe(next => {
        this.bookList.unshift(next);
        this.form.reset({
          name: '',
          read: 'true'
        });
        this.router.navigate(['list']).then(() => alert('Created success'));
      });
    }
  }
  done (i) {
    this.book = this.bookList[i];
    const data = {
      ...this.book,
      read: false
    };
    this.bookService.updateList(data).subscribe(() =>
      this.ngOnInit()
    );
  }
}
