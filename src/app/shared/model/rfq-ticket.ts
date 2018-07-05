export interface RfqTicket {
  id: string,
  product: string,
  side: string,
  client: string,
  sales: string,
  legNumber: number,
  legs: [
    {
      size: number,
    }
  ]
}