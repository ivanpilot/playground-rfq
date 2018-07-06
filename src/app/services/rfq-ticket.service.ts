import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

import { RfqTicket } from '../shared/model/rfq-ticket';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class RfqTicketService {

  constructor(private db: AngularFireDatabase) { }

  get(): Observable<RfqTicket[]>{
    return this.db.list<RfqTicket>('/bonds/eg-bonds').valueChanges()
      
      // .pipe(res => res.json())
      // .subscribe(
      //   (res) => console.log(res)
      // )
    
    
    // list('eg-bond').valueChanges()
    //   // .first()
    //   // .do(console.log)
    //   .subscribe()
  }
}
