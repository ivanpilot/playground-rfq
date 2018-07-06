import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule } from 'angularfire2/database' ;
import { environment } from '../environments/environment';

import { RfqTicketService } from './services/rfq-ticket.service';
import { AppComponent } from './app.component';
import { BondComponent } from './bond/bond.component';

@NgModule({
  declarations: [
    AppComponent,
    BondComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [RfqTicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
