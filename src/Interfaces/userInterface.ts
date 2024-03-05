export interface Person {
    [x: string]: any;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
    password: string;
    confirmPassword?: string;
  }

  export interface Login{
    status: Login;
    userId: string;
    password: string;
    userData: object;
  }