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