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
  month: string;
  amount?: number;
  date?: string;
}

export const fakeBillings: Billing[] = [
  {
    id: 1,
    month: 'January',
    amount: 100,
    date: '2021-01-01',
  },
  {
    id: 2,
    month: 'February',
    amount: 200,
    date: '2021-02-01',
  },
  {
    id: 3,
    month: 'March',
    amount: 300,
    date: '2021-03-01',
  },
  {
    id: 4,
    month: 'April',
    amount: 400,
    date: '2021-04-01',
  },
  {
    id: 5,
    month: 'May',
    amount: 500,
    date: '2021-05-01',
  },
  {
    id: 6,
    month: 'June',
    amount: 600,
    date: '2021-06-01',
  },
  {
    id: 7,
    month: 'July',
    amount: 700,
    date: '2021-07-01',
  },
  {
    id: 8,
    month: 'August',
    amount: 800,
    date: '2021-08-01',
  },
  {
    id: 9,
    month: 'September',
    amount: 900,
    date: '2021-09-01',
  },
  {
    id: 10,
    month: 'October',
    amount: 1000,
    date: '2021-10-01',
  },
  {
    id: 11,
    month: 'November',
    amount: 1100,
    date: '2021-11-01',
  },
  {
    id: 12,
    month: 'December',
    amount: 1200,
    date: '2021-12-01',
  },
];