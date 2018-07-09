import { RfqTicket } from '../shared/model/rfq-ticket';

interface SeedData {
  seedDatabase(): RfqTicket[]
}

class Seeds implements SeedData {

  seedDatabase(): RfqTicket[] {
    return [
      {
        id: 0,
        product: 'bond',
        side: 'Buy',
        client: 'CitiBank',
        sales: 'John',
        size: 1,
        price: 1000
      },
      {
        id: 1,
        product: 'bond',
        side: 'Sell',
        client: 'JP.Morgan',
        sales: 'Margot',
        size: 3,
        price: 2500
      },
    ]
  }
}

export const seedDatabase = new Seeds().seedDatabase()