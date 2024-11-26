export interface Menu {
  title: string;
}

export interface Billing {
  id: number;
  month: string;
  amount?: number;
  dateFrom?: string;
  dateTo?: string;
}
export const fakeBillings: Billing[] = [
  {
    id: 1,
    month: 'January',
    amount: 100,
    dateFrom: '2021-01-01',
    dateTo: '2021-01-31',
  },
  {
    id: 2,
    month: 'February',
    amount: 200,
    dateFrom: '2021-02-01',
    dateTo: '2021-02-28',
  },
  {
    id: 3,
    month: 'March',
    amount: 300,
    dateFrom: '2021-03-01',
    dateTo: '2021-03-31',
  },
  {
    id: 4,
    month: 'April',
    amount: 400,
    dateFrom: '2021-04-01',
    dateTo: '2021-04-30',
  },
  {
    id: 5,
    month: 'May',
    amount: 500,
    dateFrom: '2021-05-01',
    dateTo: '2021-05-31',
  },
  {
    id: 6,
    month: 'June',
    amount: 600,
    dateFrom: '2021-06-01',
    dateTo: '2021-06-30',
  },
  {
    id: 7,
    month: 'July',
    amount: 700,
    dateFrom: '2021-07-01',
    dateTo: '2021-07-31',
  },
  {
    id: 8,
    month: 'August',
    amount: 800,
    dateFrom: '2021-08-01',
    dateTo: '2021-08-31',
  },
  {
    id: 9,
    month: 'September',
    amount: 900,
    dateFrom: '2021-09-01',
    dateTo: '2021-09-30',
  },
  {
    id: 10,
    month: 'October',
    amount: 1000,
    dateFrom: '2021-10-01',
    dateTo: '2021-10-31',
  },
  {
    id: 11,
    month: 'November',
    amount: 1100,
    dateFrom: '2021-11-01',
    dateTo: '2021-11-30',
  },
];

type Constants = {
  low: number;
  med: number;
  high: number;
  veryHigh: number;
};

export const fakeConstants: Constants = {
  low: 0.6,
  med: 1.25,
  high: 2.0,
  veryHigh: 80,
};
