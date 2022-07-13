import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExampleService } from '@services/example.service';
import { IFinalBooks, IData } from './interface/books';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'image',
    'name',
    'type',
    'createdAt',
    'updatedAt',
  ];

  booksData!: MatTableDataSource<IFinalBooks>;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.exampleService.get().subscribe(books => {
      console.log('books', books);
      let finalBooks: IFinalBooks[] = [];

      books.data.map((book: IData) => {
        finalBooks.push({
          id: book.id,
          image: book.attributes.display_properties?.image,
          name: book.attributes.content,
          type: book.attributes.display_properties?.type,
          createdAt: new Date(book.attributes.created_at),
          updatedAt: new Date(book.attributes.updated_at),
        });
      });

      console.log('final books', finalBooks);

      this.booksData = new MatTableDataSource(finalBooks);

      this.booksData.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.booksData.filter = filterValue.trim().toLowerCase();
  }
}

