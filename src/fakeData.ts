export interface Menu {
  title: string;
}


export interface User {
  name: string;
  age?: number;
  email?: string;
}

export const fakeUsers: User[] = [
  {name: 'Alice', age: 25},
  {name: 'Bob', age: 30},
  {name: 'Charlie', age: 35},
  {name: 'David', age: 40},
  {name: 'Eve', age: 45},
];