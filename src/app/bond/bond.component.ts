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

  rfqTickets: RfqTicket[] = []
  constructor(private rfqTicketService: RfqTicketService){}

  ngOnInit(){
    this.rfqTicketService.get()
    .subscribe((data) => {
      console.log('this is my log', data)
      this.rfqTickets = data
    })
  }

}
