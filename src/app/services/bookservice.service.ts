import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }

  public URL_API: string = environment.backendUrl;

  getData() {

    var headers = new Headers();
    headers.set('Accept', 'application/json; charset=utf-8');
    headers.set('content-Type', 'application/json; charset=utf-8');

    const url: string = this.URL_API + "/api/books";
    return this.http.get(url);
  }

  delData(id:string){
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json; charset=utf-8');
    headers.append('content-Type', 'application/json; charset=utf-8');
    const url: string = this.URL_API + "/api/books/"+id;

    return this.http.delete<any>(url, {headers:headers});
  }

  addData(  bookName: string,
    author: string,
    pages: number,
    category: string,
    review: string,
    ) {

    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json; charset=utf-8');
    headers.append('content-Type', 'application/json; charset=utf-8');
    const url: string = this.URL_API + "/api/books";

    var body = {
      "bookName": bookName,
      "author": author,
      "pages": pages,
      "category": category,
      "review": review,
    }
    console.log(JSON.stringify(body));
    return this.http.post(url,body,{headers: headers});
    
  }
}
