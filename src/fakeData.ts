export interface Menu {
  title: string;
}


export interface User {
  id:number;
  firstName: string;
  lastName: string;
 
}


export const fakeUsers: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    id: 3,
    firstName: 'John',
    lastName: 'Smith',
  },
  {
    id: 4,
    firstName: 'Jane',
    lastName: 'Smith',
  },
];


export interface Billing {
  id:number;
  title: string;
  amount?: number;
  date?: string;
}

export const fakeBillings: Billing[] = [
  {
    id: 1,
    title: 'Electricity',
    amount: 100,
    date: '2021-01-01',
  },
  {
    id: 2,
    title: 'Water',
    amount: 50,
    date: '2021-01-02',
  },
  {
    id: 3,
    title: 'Internet',
    amount: 75,
    date: '2021-01-03',
  },
  {
    id: 4,
    title: 'Phone',
    amount: 25,
    date: '2021-01-04',
  },
];