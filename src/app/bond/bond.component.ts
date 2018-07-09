import { Component, OnInit } from '@angular/core';
import { RfqTicketService } from '../services/rfq-ticket.service';
import { RfqTicket } from '../shared/model/rfq-ticket';
import { Observable } from 'rxjs';

@Component({
  selector: 'bond',
  templateUrl: './bond.component.html',
  styleUrls: ['./bond.component.css']
})
export class BondComponent implements OnInit {

  rfqTickets$: Observable<RfqTicket[]>

  constructor(private rfqTicketService: RfqTicketService){}

  ngOnInit(){
    this.rfqTicketService.seed()
    this.rfqTickets$ = this.rfqTicketService.index()
  }
  
  increase(bond){
    this.rfqTicketService.update({...bond, price: bond.price + 100})
  }
  
  decrease(bond){
    this.rfqTicketService.update({...bond, price: bond.price - 100})
  }

}
