import { Component, OnInit } from '@angular/core';
import { FirstTestService } from '../../services/first-test.service';
import { BookserviceService } from 'src/app/services/bookservice.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Step0pizzaComponent } from '../pizzaform/step0pizza/step0pizza.component';


export interface Book {
  id: string;
  bookName: string;
  author: string;
  pages: number;
  category: string;
  review: string;
}

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit, AfterViewInit {

  nombreLibro: string;
  nombreAutor: string;
  numPage: number;
  reviewLibro: string;
  category: string;

  books: Book[];

  loading: boolean = false;

  displayedColumns2: string[] = ['id', 'bookName', 'author'];
  dataSource2: MatTableDataSource<Book>;

  //displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  //dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private BookService: BookserviceService, private router: Router) {
    
    this.BookService.getData().subscribe((data:Book[])=>{
      this.books = data;
      this.dataSource2 = new MatTableDataSource(this.books);
      this.dataSource2.paginator = this.paginator;
      this.dataSource2.sort = this.sort;
    });
  }

  ngOnInit(): void {
    this.BookService.getData().subscribe((data:Book[])=>{
      this.books = data;
      console.log("estos son los libros", data)
    });
  }

  ngAfterViewInit(): void {
    //this.dataSource2.paginator = this.paginator;
    //this.dataSource2.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }

  guardarLibro(){
    if(this.nombreLibro != undefined && this.nombreAutor != undefined && this.numPage != undefined && this.reviewLibro != undefined && this.category != undefined){
      this.BookService.addData(this.nombreLibro,this.nombreAutor,this.numPage, this.category, this.reviewLibro).subscribe(
        data=>{
          this.loading = true;
          this.BookService.getData().subscribe((data:Book[])=>{
            this.books = data;
            this.dataSource2 = new MatTableDataSource(this.books);
            this.dataSource2.paginator = this.paginator;
            this.dataSource2.sort = this.sort;
            this.loading = false;
          });
          console.log(data);
        },
        err=>{
          console.log(err)
          this.loading = false;
        }
      )
      
    }
  }
}

