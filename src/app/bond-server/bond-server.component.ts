import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RfqTicketHttpService } from '../services/rfq-ticket-http.service';
import { Observable } from 'rxjs';
import { RfqTicket } from '../shared/model/rfq-ticket';

@Component({
  selector: 'bond-server',
  templateUrl: './bond-server.component.html',
  styleUrls: ['./bond-server.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BondServerComponent implements OnInit {
  rfqTickets$: Observable<RfqTicket[]>

  constructor(private rfqTicketHttpService: RfqTicketHttpService) {}

  ngOnInit() {
    this.rfqTickets$ = this.rfqTicketHttpService.index()
  }
  
  increase(bond){
    let newPrice = parseInt(bond.price) + 100
    let newBond = {...bond, price: newPrice.toString()}
    // debugger
    this.rfqTicketHttpService.update(newBond)
      .subscribe(
        (res) => console.log('put request completed: ', res),
        (err) => console.log(err),
        () => console.log('I have completed')
      )
    // this.rfqTickets$ = this.rfqTicketHttpService.update({...bond, price: newPrice.toString()})
  }
  
  decrease(bond){
    let newPrice = parseInt(bond.price) - 100
    let newBond = {...bond, price: newPrice.toString()}
  }
  

}

// https://medium.com/the-node-js-collection/debugging-node-js-with-google-chrome-4965b5f910f4

//https://blog.codewithdan.com/2017/11/07/pushing-real-time-data-to-an-angular-service-using-web-sockets/

// https://coryrylan.com/blog/angular-observable-data-services

