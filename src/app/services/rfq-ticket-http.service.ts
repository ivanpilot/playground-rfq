import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RfqTicket } from '../shared/model/rfq-ticket';
import { first } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class RfqTicketHttpService {

  constructor(private http: HttpClient) { }

  index(): Observable<RfqTicket[]>{
    return this.http.get<RfqTicket[]>('/bonds')
      .pipe(
        first()
      )
  // index(){
  //   // const headers = new Headers()
  //   // headers.append('Content-Type', 'application/json')
  //   const result = this.http.get('/bonds')
  //     .pipe(
  //       tap(res => {
  //         // debugger
  //         console.log(res)
  //         return res
  //       })
  //     )
  //   result.subscribe(val => {
  //     // debugger
  //     console.log(`val is ${JSON.parse(val)}`)
  //   })
  }

}
