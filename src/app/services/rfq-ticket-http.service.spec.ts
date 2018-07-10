import { TestBed, inject } from '@angular/core/testing';

import { RfqTicketHttpService } from './rfq-ticket-http.service';

describe('RfqTicketHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RfqTicketHttpService]
    });
  });

  it('should be created', inject([RfqTicketHttpService], (service: RfqTicketHttpService) => {
    expect(service).toBeTruthy();
  }));
});
