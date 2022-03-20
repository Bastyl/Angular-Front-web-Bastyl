import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirstTestService {

  constructor(private http: HttpClient) { }

  public URL_API: string = environment.backendUrl;

  getData() {

    var headers = new Headers();
    headers.set('Accept', 'application/json; charset=utf-8');
    headers.set('content-Type', 'application/json; charset=utf-8');

    const url: string = this.URL_API + "/api/Books";
    return this.http.get(url);
  }
}
