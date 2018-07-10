import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  update(bond: RfqTicket){
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");

    this.http.put<RfqTicket[]>('/bonds', bond, {headers})
      .subscribe(
        data => console.log('this is the result from PUT: ', data),
        err => console.log(err)
      )
  }

}
