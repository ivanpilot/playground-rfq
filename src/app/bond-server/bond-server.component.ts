import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
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

  constructor(private rfqTicketHttpService: RfqTicketHttpService) { }

  ngOnInit() {
    this.rfqTickets$ = this.rfqTicketHttpService.index()
  }
  
  // ngOnChanges() {
  //   console.log('INSIDE ON CHANGES')
  //   // debugger
  //   this.rfqTickets$ = this.rfqTicketHttpService.index()
  // }
  
  // ngDoCheck(){
  //   console.log('INSIDE DO CHECK')
  //   // debugger
  //   this.rfqTickets$ = this.rfqTicketHttpService.index()
  // }
  
  increase(bond){
    let newPrice = parseInt(bond.price) + 100
    let newBond = {...bond, price: newPrice.toString()}
    // debugger
    // this.rfqTicketHttpService.update(newBond)
    //   .subscribe(
    //     res => {
    //       console.log('put request completed: ', res)
    //       // console.log('put request completed')
    //     },
    //     err => console.log(err)
    //   )
    // this.rfqTicketHttpService.update({...bond, price: newPrice.toString()})
  }
  
  decrease(bond){
    let newPrice = parseInt(bond.price) - 100
    let newBond = {...bond, price: newPrice.toString()}
    // debugger
    // this.rfqTicketHttpService.update(newBond)
    // .subscribe(
    //   data => {
    //     console.log(data)
    //   }
    // )
    // this.rfqTicketHttpService.update({...bond, price: newPrice.toString()})
  }
  

}
