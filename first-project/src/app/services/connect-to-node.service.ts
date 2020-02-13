import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectToNodeService {
  private REST_API_SERVER = "http://localhost:3000";
  public pokedex;
  constructor(private http: HttpClient) { }

  getPokedex(){
    return this.http.get(`${this.REST_API_SERVER}/pokedex`, {observe: 'response'}).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      }), catchError((err: HttpErrorResponse) => {
        console.dir(err);
        return throwError('error in getting pokedex');
      })
    )
  }
}
