import { TestBed, inject } from '@angular/core/testing';

import { RfqTicketService } from './rfq-ticket.service';

describe('RfqTicketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RfqTicketService]
    });
  });

  it('should be created', inject([RfqTicketService], (service: RfqTicketService) => {
    expect(service).toBeTruthy();
  }));
});
