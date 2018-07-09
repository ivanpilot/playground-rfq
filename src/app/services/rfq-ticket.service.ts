import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

import { RfqTicket } from '../shared/model/rfq-ticket';
import { seedDatabase } from '../db/seeds';

@Injectable({
  providedIn: 'root'
})
export class RfqTicketService {

  constructor(private db: AngularFireDatabase) { }

  seed(){
    this.db.object<RfqTicket[]>('/bonds/eg-bonds/').set(seedDatabase)
  }

  index(): Observable<RfqTicket[]>{
    return this.db.list<RfqTicket>('/bonds/eg-bonds').valueChanges()
  }

  update(bond: RfqTicket){
    return this.db.object<RfqTicket>(`/bonds/eg-bonds/${bond.id}`).update(bond)
  }

}
