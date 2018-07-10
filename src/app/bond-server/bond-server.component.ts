import { Component, OnInit } from '@angular/core';
import { RfqTicketHttpService } from '../services/rfq-ticket-http.service';
import { Observable } from 'rxjs';
import { RfqTicket } from '../shared/model/rfq-ticket';

@Component({
  selector: 'bond-server',
  templateUrl: './bond-server.component.html',
  styleUrls: ['./bond-server.component.css']
})
export class BondServerComponent implements OnInit {
  rfqTickets$: Observable<RfqTicket[]>

  constructor(private rfqTicketHttp: RfqTicketHttpService) { }

  ngOnInit() {
    this.rfqTickets$ = this.rfqTicketHttp.index()
  }

  // increase(bond){
  //   this.rfqTicketService.update({...bond, price: bond.price + 100})
  // }
  
  // decrease(bond){
  //   this.rfqTicketService.update({...bond, price: bond.price - 100})
  // }


}
